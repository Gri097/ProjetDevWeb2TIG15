from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import PointBioSerializers, ParcoursSerializers

from pointBio.models import PointBio, Parcours


class PointBioListView(ListAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers


class PointBioDetailView(RetrieveAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers


class ParcoursListView(ListAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers


class ParcoursDetailView(RetrieveAPIView):
    queryset = Parcours.objects.all()
    serializer_class = ParcoursSerializers
