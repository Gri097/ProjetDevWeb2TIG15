from django.urls import path, include
from .views import PointBioListView, PointBioDetailView
from .views import ParcoursListView, ParcoursDetailView

urlpatterns = [
    path('pointBio/', PointBioListView.as_view()),
    path('pointBio/<pk>/', PointBioDetailView.as_view()),
    path('parcours/', ParcoursListView.as_view()),
    path('parcours/<pk>/', ParcoursDetailView.as_view()),
]
