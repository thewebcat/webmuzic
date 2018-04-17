from django.db.models import Sum, Count
from rest_framework import viewsets
from api_v0.serializers import *


class ArtistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artist.objects.all()

    def get_queryset(self):
        return Artist.objects.annotate(
            total_albums=Count('album', distinct=True),
            total_duration=Sum('track__duration')
        )[:4]

    def get_serializer_class(self):
        if self.action == 'list':
            return ArtistViewSerializer
        return None


class AlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Album.objects.all()

    def get_queryset(self):
        return Album.objects.annotate(
            total_tracks=Count('track', distinct=True),
            total_duration=Sum('track__duration')
        )[:4]

    def get_serializer_class(self):
        if self.action == 'list':
            return AlbumViewSerializer
        return None
