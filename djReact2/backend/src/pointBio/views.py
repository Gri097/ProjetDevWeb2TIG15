# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from .models import Post
# Create your views here.

points = [
        {'id': 1, 'title': 'Point 1', 'body': 'Ce point de biodiversité contient des Hirondelles'},
        {'id': 2, 'title': 'Point 2', 'body': 'Ce point de biodiversité contient des Arbres'},
        {'id': 3, 'title': 'Point 3', 'body': 'Ce point de biodiversité contient des Roses'},
    ]

def index(request):
    return render(request, 'pointBio/index.html', {'points': points})


def show(request, id):
    point = points.count(int(id)-1)
    return render(request, 'pointBio/show.html', {'point': points[int(id)-1]})