# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Parcours, PointBiodiversite
# Register your models here.
# Ajoute le groupe/table PointBio au site admin
admin.site.register(Parcours)
admin.site.register(PointBiodiversite)
