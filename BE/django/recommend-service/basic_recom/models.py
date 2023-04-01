from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Review(models.Model):
    review_id = models.BigAutoField(primary_key=True)
    review_content = models.CharField(max_length=255, blank=True, null=True)
    review_grade = models.FloatField()
    user_id = models.BigIntegerField()
    book_isbn = models.CharField(max_length=32)
    created_date = models.DateTimeField(blank=True, null=True)
    modified_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'review'


class Userr(models.Model):

    user_id = models.BigAutoField(primary_key=True)
    created_at = models.DateTimeField()
    email = models.CharField(unique=True, max_length=64)
    username = models.CharField(unique=True, max_length=32)
    nickname = models.CharField(unique=True, max_length=32)
    password = models.CharField(max_length=128)
    user_type = models.IntegerField(blank=True, null=True)
    user_role = models.IntegerField(blank=True, null=True)
    age = models.IntegerField()
    sex = models.IntegerField()
    prefer_score = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'

    



class BookLikes(models.Model):
    book_like_id = models.BigAutoField(primary_key=True)
    book_id = models.BigIntegerField()
    user_id = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'book_likes'



class Book(models.Model):
    book_isbn = models.CharField(primary_key=True, max_length=16)
    book_title = models.CharField(max_length=256)
    book_publisher = models.CharField(max_length=50)
    book_price = models.IntegerField()
    book_description = models.TextField()
    book_grade = models.TextField(blank=True, null=True)
    book_image = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'book'




class BookGenre(models.Model):
    book_genre_id = models.BigAutoField(primary_key=True)
    book_isbn = models.ForeignKey(Book, models.DO_NOTHING, db_column='book_isbn')
    genre_id = models.ForeignKey('Genre', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'book_genre'





class Genre(models.Model):
    genre_id = models.BigAutoField(primary_key=True)
    genre_name = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'genre'



class Author(models.Model):
    author_id = models.BigAutoField(primary_key=True)
    author_name = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'author'



class BookAuthor(models.Model):
    book_author_id = models.BigAutoField(db_column='book_author_id', primary_key=True)  # Field name made lowercase.
    author_id = models.ForeignKey(Author, models.DO_NOTHING, db_column='author_id')  # Field name made lowercase.
    book_isbn = models.ForeignKey(Book, models.DO_NOTHING, db_column='book_isbn')

    class Meta:
        managed = False
        db_table = 'book_author'