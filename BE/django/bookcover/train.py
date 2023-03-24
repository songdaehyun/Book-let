import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from .serializers import BookInfoSerializer
from sklearn.metrics.pairwise import euclidean_distances
import requests
from PIL import Image
from io import BytesIO
import torch

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
def ml_progress(df):
    # .pt로 저장된 모델 불러오기
    modelpath = "static/test300.pt"
    model = torch.hub.load('ultralytics/yolov5', 'custom',
                           path=modelpath, force_reload=True)
    model.eval()    # 평가(예측) 과정에서 사용하지 않는 레이어 비활성화

    # image_spec = 이미지의 confidence 값을 df로 요약한 형태
    image_spec = pd.DataFrame(columns=[
        "isdn",
        "imgsrc",
        "cartoon",
        "solid",
        "infographic",
        "real",
        "art"
    ])

    # 아래 코드는 중복 실행하지 않도록 주의
    for idx in range(df.shape[0]):
        column_case = df.iloc[idx]

        # URL에서 이미지 요청
        res = requests.get(column_case['image'])

        input_pixel = Image.open(BytesIO(res.content))
        image_value = dict()                # 이미지 keyword의 confidence 값을 딕셔너리 형태로 정리

        # book_isbn, book_image 설정
        image_value["book_isbn"] = column_case['isbn']
        image_value["book_image"] = column_case['image']

        # 매 이미지마다 분류 특성 조회
        input_info = model(input_pixel)
        input_info = input_info.pandas().xyxy[0]

        # input_info를 구성하는 행렬을 종류별로 조회
        for col in range(input_info.shape[0]):
            # 행 하나씩 조회
            feature_column = input_info.iloc[col]
            # 딕셔너리에 {분류: 유사도} 형태로 저장
            if not feature_column.get(feature_column):
                image_value[input_info.name[col]] = input_info.confidence[col]

        image_value = pd.DataFrame([image_value])

        # image_value 값을 image_spec에 합치기
        image_spec = pd.concat([image_spec, image_value])

    # confidence 값이 없는 경우(결측치인 경우) 0으로 대체
    image_spec = image_spec.fillna(0)

    return image_spec
