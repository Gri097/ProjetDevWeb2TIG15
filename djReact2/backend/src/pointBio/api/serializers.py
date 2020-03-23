from rest_framework import serializers

from pointBio.models import PointBio


class PointBioSerializers(serializers.ModelSerializer):
    class Meta:
        model = PointBio
        fields = ('title', 'content')
