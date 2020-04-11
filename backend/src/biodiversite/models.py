# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class PointBiodiversite(models.Model):
    idPoint = models.AutoField(primary_key=True)
    nomFr = models.CharField(max_length=120)
    nomSc = models.CharField(max_length=120)
    idFamille = models.PositiveIntegerField()
    idParcours = models.PositiveIntegerField()
    numeroParcours = models.PositiveIntegerField()
    ecorceRemarquable = models.BooleanField(default=False)

    class Meta:
        db_table = "pointBio"

    def __str__(self):
        return self.nomFr


class Parcours(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255)

    class Meta:
        db_table = "parcours"

    def __str__(self):
        return self.nom


class Famille(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255)

    class Meta:
        db_table = "familles"

    def __str__(self):
        return self.nom