from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import FamilleSerializers

from famille.models import Famille


class FamilleListView(ListAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers


class FamilleDetailView(RetrieveAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers
