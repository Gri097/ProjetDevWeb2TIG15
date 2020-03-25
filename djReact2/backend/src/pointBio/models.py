# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class PointBio(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title


class Parcours(models.Model):
    nom = models.CharField(max_length=255)

    def __str__(self):
        return self.nom
