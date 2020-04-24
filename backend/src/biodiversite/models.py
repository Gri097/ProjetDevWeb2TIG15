# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Parcours(models.Model):
    nom = models.CharField(max_length=255)

    class Meta:
        db_table = "parcours"

    def __str__(self):
        return self.nom


class Famille(models.Model):
    nom = models.CharField(max_length=255)

    class Meta:
        db_table = "familles"

    def __str__(self):
        return self.nom


class PointBiodiversite(models.Model):
    nomSc = models.CharField(max_length=120)
    nomFr = models.CharField(max_length=120, blank=True)
    famille = models.ForeignKey(Famille, on_delete=models.CASCADE, blank=True, null=True)
    parcours = models.ForeignKey(Parcours, on_delete=models.CASCADE)
    numeroParcours = models.PositiveIntegerField()
    ecorceRemarquable = models.BooleanField(default=False)
    lat = models.DecimalField(decimal_places=6, max_digits=8, null=True)
    lng = models.DecimalField(decimal_places=6, max_digits=8, null=True)
    

    class Meta:
        db_table = "pointBio"

    def __str__(self):
        return self.nomSc