from distutils.command.upload import upload
from django.db import models

# Create your models here.
class Image(models.Model):
    screenshot = models.ImageField(upload_to = "screenshots")

class Component(models.Model):
    tag = models.CharField(max_length = 100)
    width = models.IntegerField()
    height = models.IntegerField()
    top = models.IntegerField()
    left = models.IntegerField()

class Navbar(models.Model):
    numberOfTabs = models.IntegerField()
    # todo:
    # tabs to be stored
