from django.urls import path
from . import views

urlpatterns = [
    path('insertdb', views.insert_db),
    path('test', views.test),
    # path('score/paragraph', views.paragraph_score),
    # path('score/book', views.book_isbn_score),
]
