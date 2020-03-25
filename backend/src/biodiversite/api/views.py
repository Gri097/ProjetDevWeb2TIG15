from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import ParcoursSerializers
from .serializers import PointBiodiversiteSerializers
from .serializers import FamilleSerializers

from biodiversite.models import Parcours, PointBiodiversite, Famille


class PointBiodiversiteListView(ListAPIView):
    queryset = PointBiodiversite.objects.all()
    serializer_class = PointBiodiversiteSerializers


class PointBiodiversiteDetailView(RetrieveAPIView):
    queryset = PointBiodiversite.objects.all()
    serializer_class = PointBiodiversiteSerializers


class ParcoursListView(ListAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers


class ParcoursDetailView(RetrieveAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers


class FamilleListView(ListAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers


class FamilleDetailView(RetrieveAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers