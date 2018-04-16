from catalog.models import Artist, Album, Track
import urllib.request, json, urllib.parse


def fill_artists():
    artists_url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4b3a3c22c51aedb26128ef56e3f7d1e7&format=json'
    url = urllib.request.urlopen(artists_url)
    data = json.loads(url.read().decode())
    for item in data['artists']['artist']:
        Artist.objects.create(name=item['name'], playcount=item['playcount'], listeners=item['listeners'],
                              image_url=item['image'][4]['#text'])


def get_album():
    albums_url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist={}&api_key=4b3a3c22c51aedb26128ef56e3f7d1e7&format=json'
    for a in Artist.objects.all():
        data_url = albums_url.format(urllib.parse.quote_plus(a.name))
        url = urllib.request.urlopen(data_url)
        data = json.loads(url.read().decode())
        for item in data['topalbums']['album']:
            Album.objects.create(name=item['name'], playcount=item['playcount'],
                                  image_url=item['image'][3]['#text'])


def get_track():
    albums_url = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4b3a3c22c51aedb26128ef56e3f7d1e7&artist={0}&album={1}&format=json'
    for a in Album.objects.all():
        data_url = albums_url.format(urllib.parse.quote_plus(a.artist.name), urllib.parse.quote_plus(a.name))
        url = urllib.request.urlopen(data_url)
        data = json.loads(url.read().decode())
        for item in data['album']['tracks']['track']:
            Track.objects.create(name=item['name'], duration=item['duration'], album=a, artist=a.artist)