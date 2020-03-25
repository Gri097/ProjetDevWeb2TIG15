from rest_framework import serializers

from biodiversite.models import Parcours, PointBiodiversite


class ParcoursSerializers(serializers.ModelSerializer):
    class Meta:
        model = Parcours
        fields = ('id', 'nom')


class PointBiodiversiteSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBiodiversite
        fields = ('idPoint', 'nomFr', 'nomSc', 'idFamille',
                  'idParcours', 'numeroParcours', 'ecorceRemarquable')
