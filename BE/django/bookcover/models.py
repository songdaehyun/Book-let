from django.db import models

# Create your models here.


class BookInfoModel(models.Model):
    book_id = models.AutoField(primary_key=True)
    isdn = models.CharField(max_length=13)
    cartoon = models.FloatField(default=0)
    solid = models.FloatField(default=0)
    infographic = models.FloatField(default=0)
    realistic = models.FloatField(default=0)
    art = models.FloatField(default=0)

    class Meta:
        db_table = 'bookinfo'
