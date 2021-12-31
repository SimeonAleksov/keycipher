from django.contrib.auth.models import AbstractUser
from django.db.models import CharField


class User(AbstractUser):
    first_name = CharField(blank=True, null=True, max_length=255)
    last_name = CharField(blank=True, null=True, max_length=255)