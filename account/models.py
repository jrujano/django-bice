from django.db import models

# Create your models here.


from django.contrib.auth.models import AbstractUser
from django.db import models


class BiceUser(AbstractUser):
    twitter = models.CharField(blank=True, max_length=120)
    linkeidn = models.CharField(blank=True, max_length=25)
    website = models.CharField(blank=True, max_length=250)