from rest_framework import serializers

from biodiversite.models import PointBiodiversite, Parcours, Famille


class PointBiodiversiteSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBiodiversite
        fields = ('idPoint', 'nomFr', 'nomSc', 'idFamille',
                  'idParcours', 'numeroParcours', 'ecorceRemarquable')


class ParcoursSerializers(serializers.ModelSerializer):
    class Meta:
        model = Parcours
        fields = ('id', 'nom')


class FamilleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Famille
        fields = ('id', 'nom')