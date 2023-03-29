from django.urls import path
from . import views

urlpatterns = [
    path('image/', views.image_recommend),
    path('register/', views.data_refine_progress),
]
