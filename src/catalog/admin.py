from django.contrib import admin

from catalog.models import Artist, Album, Track, Tag


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    search_fields = ("name",)


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    search_fields = ("name",)


@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = ('name', 'duration', 'album', 'artist')
