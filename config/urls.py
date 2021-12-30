from django.conf import settings
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.jwt')),
    path('users/', include('keycipher.users.urls')),
    path(settings.ADMIN_URL, admin.site.urls),
]


if settings.DEBUG:
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
