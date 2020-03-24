from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import PointBioSerializers
from .serializers import FamilleSerializers

from pointBio.models import PointBio
from pointBio.models import Famille


class PointBioListView(ListAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers


class PointBioDetailView(RetrieveAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers


class FamilleListView(ListAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers


class FamilleDetailView(RetrieveAPIView):
    queryset = Famille.objects.all()
    serializer_class = FamilleSerializers
