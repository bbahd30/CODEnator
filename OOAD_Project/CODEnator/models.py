from distutils.command.upload import upload
from email.policy import default
from pyexpat import model
from random import choices
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
import os

# from functions import rename_file
def rename_file(instance,filename):
    upload_to = 'screenshots'
    filename = 'UI_extract_file.jpg'
    return os.path.join('screenshots', filename)


# Create your models here.
class Image(models.Model):
    id = models.AutoField(primary_key=True)
    screenshot = models.ImageField(upload_to = rename_file)

# @receiver(pre_save, sender=Image)
# def file_update(sender, **kwargs):
#     upload_folder_instance = kwargs['instance']
#     path = upload_folder_instance.screenshot.path
    
#     os.remove(path)
#     print("Removed")

# note: will do using variables not storing in the db
# class Component(models.Model):
#     tag = models.CharField(max_length = 100)
#     width = models.IntegerField()
#     height = models.IntegerField()
#     top = models.IntegerField()
#     left = models.IntegerField()


    
class H1(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h1>"
    closing_tag = "</h1>" 

class H2(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h2>"
    closing_tag = "</h2>"

class H3(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h3>"
    closing_tag = "</h3>"

class H4(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h4>"
    closing_tag = "</h4>"

class H5(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h5>"
    closing_tag = "</h5>"

class H6(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = "<h6>"
    closing_tag = "</h6>"

# class Heading(models.Model):
#     degree = models.IntegerField( null = True, blank = True)
#     text = models.CharField(max_length=5000, null = True, blank = True)

class Paragraph(models.Model):
    opening_tag = "<p>"
    closing_tag = "</p>"
    text = models.CharField(max_length=10000, null = True, blank = True)

class Hr(models.Model):
    opening_tag = "<hr>"
    hr_bool = models.BooleanField(default=False, null = True, blank = True)

class Anchor(models.Model):
    opening_tag = "<a>"
    closing_tag = "</a>"
    link_text = models.CharField(max_length = 400, null = True, blank = True)
    link = models.CharField(max_length = 400, null = True, blank = True)

class Image(models.Model):
    opening_tag = "<img>"
    closing_tag = "</img>"
    user_image = models.ImageField(upload_to = 'user_image', null = True)
    
class Navbar(models.Model):
    num_of_tabs = models.IntegerField( null = True, blank = True)
    tab_text = models.JSONField(default=list, blank=True, null=True)
    # taking number of multiple fields and then take length of array to make the loop 
    # todo:
    # tabs to be stored

class Table(models.Model):
    row = models.IntegerField(null = True, blank = True)
    col = models.IntegerField(null = True, blank = True)
    row_data = models.JSONField(default=list, blank=True, null=True)
    col_data = models.JSONField(default=list, blank=True, null=True)

# class Footer(models.Model):

class Button(models.Model):
    opening_tag = "<button>"
    closing_tag = "</button>"
    text = models.CharField(max_length = 200, null = True, blank = True)

class Select(models.Model):
    choices = models.JSONField(default=list, blank=True, null=True)

# class Sidbar(models.Model):
#     menu_items = models.JSONField(default=list, blank=True, null=True)


#table, navbar, select to be done later as i dont know the variables