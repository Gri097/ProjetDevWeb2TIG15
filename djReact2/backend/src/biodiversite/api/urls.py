from django.urls import path, include
from .views import ParcoursListView, ParcoursDetailView
from .views import PointBiodiversiteListView, PointBiodiversiteDetailView

urlpatterns = [
    path('parcours/', ParcoursListView.as_view()),
    path('parcours/<pk>/', ParcoursDetailView.as_view()),
    path('PointBiodiversite/', PointBiodiversiteListView.as_view()),
    path('PointBiodiversite/<pk>/', PointBiodiversiteDetailView.as_view()),
]
