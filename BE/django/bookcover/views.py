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
    if request.method == 'POST':
        # Get input data from POST request
        input_data = request.POST.get('input_data')

        # input_pixel = Image 함수로 이미지 값 읽어오기
        input_pixel = Image.open(input_data[0])
        # 추천 알고리즘을 바탕으로 비슷한 유사도 가진 삽화 N개 반환

        # input_info = 모델 기반 특정 테마의 유사도를 df 형식으로 표시
        input_info = model(input_pixel)
        input_info = input_info.pandas().xyxy[0]

        image_class = []
        image_confidence = []

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

        # input_info 값을 하나씩 조회
        for col in range(input_info.shape[0]):
            # image_spec에 해당하는 열이 있으면 confidence 값으로 대체
            image_class.append(input_info.name[col])
            image_confidence.append(input_info.confidence[col])

        # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
        image_spec = image_spec.fillna(0)

        # 여기에 output image를 추천하는 알고리즘 작성

        # output = 추천 이미지 리스트
        output = 0
        # Format the output as JSON
        response = {'output': output}

        # Return the response as a JSON object
        return JsonResponse(response)
