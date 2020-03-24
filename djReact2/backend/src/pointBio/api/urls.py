from django.urls import path, include
from .views import PointBioListView, PointBioDetailView
from .views import FamilleListView, FamilleDetailView

urlpatterns = [
    path('pointBio/', PointBioListView.as_view()),
    path('pointBio/<pk>/', PointBioDetailView.as_view()),
    path('famille/', FamilleListView.as_view())
]
