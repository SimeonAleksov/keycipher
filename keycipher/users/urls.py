from django.conf.urls import re_path
from keycipher.users import views

app_name = "users"


urlpatterns = [
    re_path(r'^totp/create/$', views.TOTPCreateView.as_view(), name='totp-create'),
    re_path(r'^totp/login/$', views.TOTPVerifyView.as_view(), name='totp-login'),
]
