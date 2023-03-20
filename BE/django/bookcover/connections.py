import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from surprise import Dataset, Reader, KNNWithMeans, KNNBasic
from .serializers import BookInfoSerializer

# 연관 이미지 추천해 주는 함수
# 이미지의 유사도 계산 결과 저장(DB)


def bookcover_recommendation():
    serializer = BookInfoSerializer(many=True)

    cv = TfidfVectorizer()
    # 책 표시 속성 별 유사도 검사
    count_matrix = cv.fit_transform()
    # 이미지 간 코사인 유사도 검사
    cosine_sim = cosine_similarity(count_matrix)

    # pkl 파일로 static 디렉토리에 저장
    return
