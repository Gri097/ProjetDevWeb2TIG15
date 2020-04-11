from django.urls import path, include
from .views import ParcoursListView, ParcoursDetailView
from .views import PointBiodiversiteListView, PointBiodiversiteDetailView
from .views import FamilleListView, FamilleDetailView

urlpatterns = [
    path('pointBiodiversite/', PointBiodiversiteListView.as_view()),
    path('pointBiodiversite/<pk>/', PointBiodiversiteDetailView.as_view()),
    path('parcours/', ParcoursListView.as_view()),
    path('parcours/<pk>/', ParcoursDetailView.as_view()),
    path('famille/', FamilleListView.as_view()),
    path('famille/<pk>/', FamilleDetailView.as_view()),
]
