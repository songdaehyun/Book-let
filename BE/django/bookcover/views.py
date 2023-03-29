# from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
import cv2
import numpy as np
from .train import bookcover_recommendation
from tensorflow import keras
import requests
from .serializers import BookInfoSerializer


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
            "feeling"
        ])

        # 요청한 값의 이미지 URL을 하나씩 조회
        for imgidx in range(len(input_image)):
            col_image = input_image[imgidx]     # 이미지 URL 주소

            # 각 URL 별 Image 데이터 불러오기
            req_result = requests.get(col_image)
            input_pixel = np.asarray(
                bytearray(
                    req_result.content
                ),
                dtype=np.uint8
            )

            # 이미지 크기를 (300, 300)으로 재조정
            input_image = cv2.imdecode(input_pixel, cv2.IMREAD_COLOR)
            input_image = cv2.resize(input_image, (300, 300))

            image_RGB = cv2.cvtColor(input_image, cv2.COLOR_BGR2RGB)

            # Reshaping RGB image to get following: (batch size, rows, columns, channels)
            x_input_RGB = image_RGB.reshape(
                1,
                image_RGB.shape[0],
                image_RGB.shape[1],
                3
            ).astype(
                np.float32
            )

            image_value = dict()                # 이미지 keyword의 confidence 값을 딕셔너리 형태로 정리

            # book_id, book_isbn, book_image 설정
            image_value["book_id"] = imgidx
            image_value["book_isbn"] = input_isbn[imgidx]
            image_value["book_image"] = col_image

            # 모델로 카테고리 분류
            input_info = model.predict(x_input_RGB)

            # # 딕셔너리에 {분류: 유사도} 형태로 저장
            # 모델 예측 결과 중 가장 정확도가 높은 값의 인덱스 번호
            image_value["feeling"] = np.argmax(input_info[0])
            image_value = pd.DataFrame([image_value])

            # image_value 값을 image_spec에 합치기
            image_spec = pd.concat([image_spec, image_value])

        # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
        image_spec = image_spec.fillna(0)

        # DB에 해당 값 주입

        # response = 추천 이미지 리스트
        response = bookcover_recommendation(image_spec)

        # Return the response as a JSON object
        return JsonResponse(response)

    # 유효하지 않은 요청에 대해서는 오류 처리
    return HttpResponseBadRequest("이미지 URL 또는 ISBN 번호가 잘못되었습니다.")


# 이미지 정보를 분류하는 데이터 전처리 함수
# df에 들어가는 값은 [ISBN번호, 이미지 주소, 감정점수]로 구현되어야 한다.
# isbn 중복을 제외하고, isbn과 image 주소 값이 유효해야 함('없음' 등이 들어가면 안 됨)

@csrf_exempt    # API를 만드는 경우 csrf 인증을 끄는 게 좋다.(대신 API 키 등의 방식을 사용)
def data_refine_progress(request):
    if request.method == 'POST':
        book_name = request.POST.get("book_name")
        book_isbn = request.POST.get("book_isbn")
        book_image = request.POST.get("book_image")

        # URL에서 이미지 요청
        image_nparray = np.asarray(
            bytearray(
                requests.get(book_image).content
            ),
            dtype=np.uint8
        )
        origin_image = cv2.imdecode(image_nparray, cv2.IMREAD_COLOR)

        # 이미지 사이즈 조절
        resize_img = cv2.resize(origin_image, (300, 300))

        # Converting image to RGB by OpenCV function
        image_RGB = cv2.cvtColor(resize_img, cv2.COLOR_BGR2RGB)

        # Reshaping RGB image to get following: (batch size, rows, columns, channels)
        x_input_RGB = image_RGB.reshape(
            1,
            image_RGB.shape[0],
            image_RGB.shape[1],
            3
        ).astype(
            np.float32
        )

        predict_result = model.predict(x_input_RGB)

        # feeling = 예측 결과(0~5 사이) 저장
        feeling = np.argmax(predict_result[0])

        # 이미지 정보와 분류 결과를 serializer에 저장
        serializer = BookInfoSerializer()

        return HttpResponse("201 CREATED")

    return HttpResponseBadRequest("유효하지 않은 요청입니다.")
