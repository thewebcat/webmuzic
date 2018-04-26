from django.db import models
from django.utils.translation import ugettext_lazy as _


class AbstractMusicCatalog(models.Model):
    playcount = models.PositiveIntegerField(verbose_name="Прослушиваний", null=True, blank=True)
    listeners = models.PositiveIntegerField(verbose_name="Слушателей", null=True, blank=True)

    class Meta:
        abstract = True


class Tag(models.Model):
    name = models.CharField(verbose_name="Тэг", max_length=50)
    color = models.CharField(verbose_name="Цвет", max_length=10)

    def __str__(self):
        return self.name


class Artist(AbstractMusicCatalog):
    name = models.CharField(verbose_name="Имя", max_length=100, db_index=True)
    image_url = models.CharField(verbose_name="Картинка", max_length=255)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('artist')
        verbose_name_plural = _('artists')


class Album(AbstractMusicCatalog):
    name = models.CharField(verbose_name="Название", max_length=100, db_index=True)
    image_url = models.CharField(verbose_name="Картинка", max_length=255)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('album')
        verbose_name_plural = _('albums')


class Track(AbstractMusicCatalog):
    name = models.CharField(verbose_name="Название", max_length=100, db_index=True)
    duration = models.PositiveIntegerField(verbose_name="Продолжительность (s)")
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('track')
        verbose_name_plural = _('tracks')
