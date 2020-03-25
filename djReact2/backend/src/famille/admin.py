# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Famille
# Register your models here.
# Ajoute le groupe/table Famille au site admin
admin.site.register(Famille)
