import pandas as pd
from .serializers import BookInfoSerializer
from sklearn.metrics.pairwise import euclidean_distances
import requests
from PIL import Image
from io import BytesIO
import numpy as np
import cv2
from tensorflow import keras

# 유클리드 거리를 기준으로 연관 이미지 추천해 주는 함수


def bookcover_recommendation(result_dataframe):
    serializer = BookInfoSerializer(many=True)

    # DB에서 표지 별 분류 데이터 가져오기
    db_dataframe = []

    # 이미지 간 유클리드 거리 검사
    similarity_matrix = euclidean_distances(result_dataframe, db_dataframe)

    # pkl 파일로 static 디렉토리에 저장
    return similarity_matrix


# 이미지 정보를 분류하는 머신러닝 함수
# df에 들어가는 값은 [ISBN번호, 이미지 주소]로 구현되어야 한다.
# isbn 중복을 제외하고, isbn과 image 주소 값이 유효해야 함('없음' 등이 들어가면 안 됨)
def ml_progress(df):
    # .pt로 저장된 모델 불러오기
    modelpath = "static/model5"
    model = keras.models.load_model(modelpath)

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

    for idx in range(df.shape[0]):
        column_case = df.iloc[idx]
        image_value = dict()

        # URL에서 이미지 요청
        image_nparray = np.asarray(
            bytearray(requests.get(column_case["image"]).content), dtype=np.uint8)
        origin_image = cv2.imdecode(image_nparray, cv2.IMREAD_COLOR)

        # 이미지 사이즈 조절
        resize_img = cv2.resize(origin_image, (300, 300))

        # Converting image to RGB by OpenCV function
        image_RGB = cv2.cvtColor(resize_img, cv2.COLOR_BGR2RGB)

        # Reshaping RGB image to get following: (batch size, rows, columns, channels)
        x_input_RGB = image_RGB.reshape(
            1, image_RGB.shape[0], image_RGB.shape[1], 3).astype(np.float32)

        predict_result = model.predict(x_input_RGB)

        # book_isbn, book_image 설정
        image_value["book_isbn"] = column_case['isbn']
        image_value["book_image"] = column_case['image']
        image_value["anger"] = predict_result[0][0]
        image_value["disgust"] = predict_result[0][1]
        image_value["fear"] = predict_result[0][2]
        image_value["joy"] = predict_result[0][3]
        image_value["sadness"] = predict_result[0][4]
        image_value["surprise"] = predict_result[0][5]

        # predict 결과를 anger~surprise에 추가

        image_value = pd.DataFrame([image_value])

        # image_value 값을 image_spec에 합치기
        image_spec = pd.concat([image_spec, image_value])

    # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
    image_spec = image_spec.fillna(0)

    return image_spec
