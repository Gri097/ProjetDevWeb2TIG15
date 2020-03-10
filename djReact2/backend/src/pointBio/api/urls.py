from django.urls import path, include
from .views import PointBioListView, PointBioDetailView

urlpatterns = [
    path('', PointBioListView.as_view()),
    path('<pk>', PointBioDetailView.as_view())
]
