from django.urls import path, include
from . import views
app_name = 'pointBio'
urlpatterns = [
    path('', views.index, name='index'),
    path('points/<id>', views.show, name='show'),
]