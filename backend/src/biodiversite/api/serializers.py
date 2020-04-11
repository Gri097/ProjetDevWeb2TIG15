from rest_framework import serializers

from biodiversite.models import PointBiodiversite, Parcours, Famille


class ParcoursSerializers(serializers.ModelSerializer):
    class Meta:
        model = Parcours
        fields = ('id', 'nom')


class FamilleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Famille
        fields = ('id','nom')


class PointBiodiversiteSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBiodiversite
        fields = ('id', 'nomSc', 'nomFr', 'famille_id',
                  'parcours_id', 'numeroParcours', 'ecorceRemarquable')