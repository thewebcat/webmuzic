from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()
router.register(r'artists', ArtistViewSet)
router.register(r'albums', AlbumViewSet)


urlpatterns = router.urls
