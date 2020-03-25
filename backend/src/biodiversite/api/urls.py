from django.urls import path, include
from .views import ParcoursListView, ParcoursDetailView
from .views import PointBiodiversiteListView, PointBiodiversiteDetailView
from .views import FamilleListView, FamilleDetailView

urlpatterns = [
    path('PointBiodiversite/', PointBiodiversiteListView.as_view()),
    path('PointBiodiversite/<pk>/', PointBiodiversiteDetailView.as_view()),
    path('parcours/', ParcoursListView.as_view()),
    path('parcours/<pk>/', ParcoursDetailView.as_view()),
    path('Famille/', FamilleListView.as_view()),
    path('Famille/<pk>/', FamilleDetailView.as_view()),
]
