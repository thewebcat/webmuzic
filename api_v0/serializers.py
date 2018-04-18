from rest_framework import serializers
from catalog.models import Artist, Album, Track


class ArtistListSerializer(serializers.ModelSerializer):
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


class AlbumListSerializer(serializers.ModelSerializer):
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


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('id', 'name', 'duration')


class AlbumDetailSerializer(serializers.ModelSerializer):
    total_tracks = serializers.IntegerField()
    total_duration = serializers.IntegerField()
    artist = serializers.StringRelatedField()
    track_set = TrackSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = [
            'name',
            'artist',
            'image_url',
            'total_tracks',
            'total_duration',
            'track_set',
        ]