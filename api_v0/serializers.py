from rest_framework import serializers
from catalog.models import Artist, Album


class ArtistViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = [
            'id',
            'name',
            'image_url',
        ]


class AlbumViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = [
            'id',
            'name',
            'image_url',
        ]