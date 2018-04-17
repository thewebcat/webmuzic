from django.db.models import Sum, Count
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination

from api_v0.serializers import *


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 1000


class ArtistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artist.objects.all()
    filter_backends = (DjangoFilterBackend,)
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Artist.objects.annotate(
            total_albums=Count('album', distinct=True),
            total_duration=Sum('track__duration')
        )

    def get_serializer_class(self):
        if self.action == 'list':
            return ArtistListSerializer
        return None


class AlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Album.objects.all()
    filter_backends = (DjangoFilterBackend,)
    pagination_class = StandardResultsSetPagination
    filter_fields = ('artist',)

    def get_queryset(self):
        return Album.objects.annotate(
            total_tracks=Count('track', distinct=True),
            total_duration=Sum('track__duration')
        )

    def get_serializer_class(self):
        if self.action == 'list':
            return AlbumListSerializer
        return AlbumDetailSerializer
