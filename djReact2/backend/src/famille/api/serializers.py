from rest_framework import serializers

from famille.models import Famille


class FamilleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Famille
        fields = ('id', 'title', 'body')
