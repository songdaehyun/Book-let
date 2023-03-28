import pandas as pd
from .serializers import BookInfoSerializer
import requests
from skimage.metrics import structural_similarity as ssim
import requests
import numpy as np
import cv2
from tensorflow import keras
from .models import BookInfoModel

# skimage.ssim을 이용해 연관 이미지 추천해 주는 함수


def bookcover_recommendation(result_dataframe):
    serializer = BookInfoSerializer(many=True)

    # 추천 리스트
    rec_list = []

    # df의 행을 하나씩 읽으면서 유사도 검사
    for col in range(result_dataframe.shape[0]):
        # 요청받은 이미지의 특성 정보 행
        input_data = result_dataframe.iloc[col]
        input_feeling = input_data["feeling"]

        # Django ORM으로 DB에서 표지 분류 결과가 일치하는 항목 가져오기
        db_dataframe = BookInfoModel.objects.get(feeling=input_feeling)

        # 사용자가 제출한 선호 추천 표지
        image_src1 = input_data["book_image"]

        # DB에 저장된 연관 추천 표지
        for idx in range(len(db_dataframe)):
            # db에서 하나씩 꺼내서 유사도 비교?(이하 미완성)
            image_src2 = db_dataframe.objects.filter()

            origin_img1 = np.asarray(
                bytearray(requests.get(image_src1).content), dtype=np.uint8)
            resize_img1 = cv2.resize(origin_img1, (300, 300))

            origin_img2 = np.asarray(
                bytearray(requests.get(image_src2).content), dtype=np.uint8)
            resize_img2 = cv2.resize(origin_img2, (300, 300))

            # score = 이미지 간의 유사도(-1 ~ 1 사이, 1에 가까울수록 유사도 높음)
            (score, diff) = ssim(resize_img1, resize_img2, full=True)

    # 유사도 상위 N개 필터링 후 rec_list에 추가
    rec_list.append()

    # pkl 파일로 static 디렉토리에 저장
    return rec_list


# 이미지 정보를 분류하는 데이터 전처리 함수
# df에 들어가는 값은 [ISBN번호, 이미지 주소]로 구현되어야 한다.
# isbn 중복을 제외하고, isbn과 image 주소 값이 유효해야 함('없음' 등이 들어가면 안 됨)
def data_refine_progress(df):
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
