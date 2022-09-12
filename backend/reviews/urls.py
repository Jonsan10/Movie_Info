from django.urls import path
from reviews import views

urlpatterns = [
    path('', views.create_review),
    path('<str:movie_id>/reviews/', views.get_all_reviews),
    path('delete/<int:pk>/', views.delete_review),
]
