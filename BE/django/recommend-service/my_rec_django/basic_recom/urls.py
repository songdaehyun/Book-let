from django.urls import path
from . import views


urlpatterns = [
    path('star/', views.star_book),
    path('like/', views.like_book),
    path('category/', views.category_book),
    path('profile/', views.profile_book),
    path('booklist/', views.show_all_book)
]