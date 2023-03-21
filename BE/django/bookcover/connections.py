import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from .serializers import BookInfoSerializer
from sklearn.metrics.pairwise import euclidean_distances


# 유클리드 거리를 기준으로 연관 이미지 추천해 주는 함수


def bookcover_recommendation(result_dataframe):
    serializer = BookInfoSerializer(many=True)

    # DB에서 표지 별 분류 데이터 가져오기
    db_dataframe = []

    # 이미지 간 유클리드 거리 검사
    similarity_matrix = euclidean_distances(result_dataframe, db_dataframe)

    # pkl 파일로 static 디렉토리에 저장
    return similarity_matrix
