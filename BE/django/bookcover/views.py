# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import pandas as pd
import cv2
import numpy as np
from .train import bookcover_recommendation
from tensorflow import keras
from io import BytesIO
import requests


# import yolov5

# .pt로 저장된 모델 불러오기
modelpath = "static/model5"
model = keras.models.load_model(modelpath)
# model = yolov5.load(modelpath)


@csrf_exempt    # API를 만드는 경우 csrf 인증을 끄는 게 좋다.(대신 API 키 등의 방식을 사용)
def image_recommend(request):   # 예측 기능 수행
    if request.method == 'GET':
        # isbn이나 image 정보가 없는 경우 오류 반환

        # Get 요청에서 입력 데이터 추출
        # input_data 처리 결과가 유효하지 않으면 오류가 반환해야 함
        input_image = list(request.GET.get('book_image').split(','))
        input_isbn = list(request.GET.get('book_isbn').split(','))

        # image_spec = 이미지의 confidence 값을 df로 요약한 형태
        image_spec = pd.DataFrame(columns=[
            "book_isbn",
            "book_image",
            "anger",
            "disgust",
            "fear",
            "joy",
            "sadness",
            "surprise"
        ])

        # 요청한 값의 이미지 URL을 하나씩 조회
        for imgidx in range(len(input_image)):
            col_image = input_image[imgidx]     # 이미지 URL 주소
            # 각 URL 별 Image 데이터 불러오기
            req_result = requests.get(col_image)
            input_pixel = np.asarray(
                bytearray(req_result.content), dtype=np.uint8)
            # 이미지 크기를 (300, 300)으로 재조정
            input_image = cv2.imdecode(input_pixel, cv2.IMREAD_COLOR)
            input_image = cv2.resize(input_image, (300, 300))

            image_RGB = cv2.cvtColor(input_image, cv2.COLOR_BGR2RGB)

        # Reshaping RGB image to get following: (batch size, rows, columns, channels)
            x_input_RGB = image_RGB.reshape(
                1, image_RGB.shape[0], image_RGB.shape[1], 3).astype(np.float32)

            image_value = dict()                # 이미지 keyword의 confidence 값을 딕셔너리 형태로 정리

            # book_id, book_isbn, book_image 설정
            image_value["book_id"] = imgidx
            image_value["book_isbn"] = input_isbn[imgidx]
            image_value["book_image"] = col_image

            # 모델로 카테고리 분류
            input_info = model.predict(x_input_RGB)

            # 72 ~ 83번 줄 새로 바꿔야 함(모델 변경)
            # 딕셔너리에 {분류: 유사도} 형태로 저장

            image_value = pd.DataFrame([image_value])

            # image_value 값을 image_spec에 합치기
            image_spec = pd.concat([image_spec, image_value])

        # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
        image_spec = image_spec.fillna(0)

        # DB에 해당 값 주입

        # output = 추천 이미지 리스트
        output = bookcover_recommendation(image_spec)

        # Format the output as JSON
        response = {'book_image': output}

        # Return the response as a JSON object
        return JsonResponse(response)

    # 유효하지 않은 요청에 대해서는 오류 처리
    # return JsonResponse()
