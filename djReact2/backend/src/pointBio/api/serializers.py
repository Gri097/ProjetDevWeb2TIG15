from rest_framework import serializers

from pointBio.models import PointBio
from pointBio.models import Famille


class PointBioSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBio
        fields = ('id', 'title', 'content',)


class FamilleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Famille
        fields = ('title', 'body')
