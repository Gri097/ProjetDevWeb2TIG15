from .serializers import PointBioSerializers
from pointBio.models import PointBio
from rest_framework.generics import ListAPIView, RetrieveAPIView


class PointBioListView(ListAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers


class PointBioDetailView(RetrieveAPIView):
    queryset = PointBio.objects.all()
    serializer_class = PointBioSerializers
