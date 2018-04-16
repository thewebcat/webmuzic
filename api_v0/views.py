from rest_framework import viewsets
from api_v0.serializers import *


class ArtistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artist.objects.all()[:4]

    def get_serializer_class(self):
        if self.action == 'list':
            return ArtistViewSerializer
        return None


class AlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Album.objects.all()[:4]

    def get_serializer_class(self):
        if self.action == 'list':
            return AlbumViewSerializer
        return None
