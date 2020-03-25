from django.urls import path, include
from .views import FamilleListView, FamilleDetailView

urlpatterns = [
    path('', FamilleListView.as_view()),
    path('<pk>/', FamilleDetailView.as_view()),
]
