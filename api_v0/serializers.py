from rest_framework import serializers
from catalog.models import Artist, Album


class ArtistViewSerializer(serializers.ModelSerializer):
    total_albums = serializers.IntegerField()
    total_duration = serializers.IntegerField()

    class Meta:
        model = Artist
        fields = [
            'id',
            'name',
            'image_url',
            'total_albums',
            'total_duration',
        ]


class AlbumViewSerializer(serializers.ModelSerializer):
    total_tracks = serializers.IntegerField()
    total_duration = serializers.IntegerField()

    class Meta:
        model = Album
        fields = [
            'id',
            'name',
            'image_url',
            'total_tracks',
            'total_duration',
        ]