from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import ParcoursSerializers
from .serializers import PointBiodiversiteSerializers

from biodiversite.models import Parcours, PointBiodiversite


class ParcoursListView(ListAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers


class ParcoursDetailView(RetrieveAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers


class PointBiodiversiteListView(ListAPIView):
    queryset = PointBiodiversite.objects.all()
    serializer_class = PointBiodiversiteSerializers


class PointBiodiversiteDetailView(RetrieveAPIView):
    queryset = PointBiodiversite.objects.all()
    serializer_class = PointBiodiversiteSerializers
