from django.shortcuts import render
import torch
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import pandas as pd
# import yolov5

# .pt로 저장된 모델 불러오기
modelpath = "static/test300.pt"
model = torch.hub.load('ultralytics/yolov5', 'custom',
                       path=modelpath, force_reload=True)
model.eval()    # 평가(예측) 과정에서 사용하지 않는 레이어 비활성화
# model = yolov5.load(modelpath)


@csrf_exempt    # API를 만드는 경우 csrf 인증을 끄는 게 좋다.(대신 API 키 등의 방식을 사용)
def image_recommend(request):   # 예측 기능 수행
    if request.method == 'GET':
        # isbn이나 image 정보가 없는 경우 오류 반환

        # Get 요청에서 입력 데이터 추출
        input_data = request.GET.get('book_image')

        # image_spec = 이미지의 confidence 값을 df로 요약한 형태
        image_spec = pd.DataFrame(columns=[
            "book_id",
            "isdn",
            "imgsrc",
            "cartoon",
            "solid",
            "infographic",
            "realistic",
            "art"
        ])

        # 요청한 값의 이미지 URL을 하나씩 조회
        for imgidx in range(len(input_data)):
            # 각 URL 별 Image 데이터 불러오기
            input_pixel = Image.open(input_data[imgidx])
            image_value = dict()                # 이미지 keyword의 confidence 값을 딕셔너리 형태로 정리

            # book_id, book_isbn, book_image 설정
            image_value["book_id"] = imgidx
            image_value["book_isbn"] = input_data["book_isbn"][imgidx]
            image_value["book_image"] = input_data["book_image"][imgidx]

            # 모델로 카테고리 분류한 후 pandas DF로 전환
            input_info = model(input_pixel)
            input_info = input_info.pandas().xyxy[0]

            # input_info를 구성하는 행렬을 종류별로 조회
            for col in range(input_info.shape[0]):
                # 딕셔너리에 {분류: 유사도} 형태로 저장
                if not image_value.get(input_info.name):
                    image_value[input_info.name[col]
                                ] = input_info.confidence[col]

            image_value = pd.DataFrame([image_value])

            # image_value 값을 image_spec에 합치기
            image_spec = pd.concat([image_spec, image_value])

            # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
            image_spec = image_spec.fillna(0)

        # output = 추천 이미지 리스트
        output = []
        # 여기에 output image를 추천하는 알고리즘 작성

        # Format the output as JSON
        response = {'book_image': output}

        # Return the response as a JSON object
        return JsonResponse(response)
