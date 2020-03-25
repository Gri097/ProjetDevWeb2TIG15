from rest_framework import serializers

from pointBio.models import PointBio
from pointBio.models import Parcours


class PointBioSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBio
        fields = ('id', 'title', 'content',)


class ParcoursSerializers(serializers.ModelSerializer):
    class Meta:
        model = Parcours
        fields = ('id', 'nom')
