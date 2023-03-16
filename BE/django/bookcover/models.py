from django.db import models

# Create your models here.


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
