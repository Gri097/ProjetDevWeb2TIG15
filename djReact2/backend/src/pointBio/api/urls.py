from django.urls import path, include
from .views import PointBioListView, PointBioDetailView

urlpatterns = [
    path('pointBio/', PointBioListView.as_view()),
    path('pointBio/<pk>/', PointBioDetailView.as_view())
]
