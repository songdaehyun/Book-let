from django.db import models

# Create your models here.


# book_id 삭제
# isdn을 book_isbn으로 바꾸기, 기본 키로 설정
# imgsrc를 book_img로, max_length=500으로 수정

# book_title 추가 여부 검토
class BookInfoModel(models.Model):
    book_id = models.AutoField(primary_key=True)    # 책 id
    isdn = models.CharField(max_length=13)  # ISDN(13자리)
    imgsrc = models.CharField(max_length=300)   # 이미지 출처(URL)
    cartoon = models.FloatField(default=0)  # 만화 그림체 유사도
    solid = models.FloatField(default=0)    # 솔리드 그림체 유사도
    infographic = models.FloatField(default=0)  # 인포그래픽(단색, 추상화) 그림체 유사도
    realistic = models.FloatField(default=0)    # 사실 묘사 그림체(사진 포함) 유사도
    art = models.FloatField(default=0)  # 예술(일러스트 포함) 그림체 유사도

    class Meta:
        db_table = 'bookinfo'
