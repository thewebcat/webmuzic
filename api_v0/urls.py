from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()
router.register(r'artists', ArtistViewSet)
router.register(r'albums', AlbumViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'auth/$', ExampleView.as_view()),
    url(r'', include('rest_framework.urls'))
]
