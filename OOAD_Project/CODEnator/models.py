from django.db import models

import os

def rename_file(instance,filename):
    upload_to = 'screenshots'
    filename = 'UI_extract_file.jpg'
    return os.path.join('screenshots', filename)

class Image(models.Model):
    screenshot = models.ImageField(upload_to = rename_file)

# @receiver(pre_save, sender=Image)
# def file_update(sender, **kwargs):
#     upload_folder_instance = kwargs['instance']
#     path = upload_folder_instance.screenshot.path
    
#     os.remove(path)
#     print("Removed")
    
class H1(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h1>")
    closing_tag = models.CharField(max_length=100, default = "</h1>") 

class H2(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h2>")
    closing_tag = models.CharField(max_length=100, default = "</h2>") 

class H3(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h3>")
    closing_tag = models.CharField(max_length=100, default = "</h3>") 

class H4(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h4>")
    closing_tag = models.CharField(max_length=100, default = "</h4>") 

class H5(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h5>")
    closing_tag = models.CharField(max_length=100, default = "</h5>") 

class H6(models.Model):
    text = models.CharField(max_length=5000)
    opening_tag = models.CharField(max_length=100, default = "<h6>")
    closing_tag = models.CharField(max_length=100, default = "</h6>") 

class Paragraph(models.Model):
    opening_tag = models.CharField(max_length=100, default = "<p>")
    closing_tag = models.CharField(max_length=100, default = "</p>") 
    text = models.CharField(max_length=10000, null = True, blank = True)

class Hr(models.Model):
    opening_tag = models.CharField(max_length=100, default = "<hr>")
    hr_bool = models.BooleanField(default=False, null = True, blank = True)

class Anchor(models.Model):
    opening_tag = models.CharField(max_length=100, default = "<a>")
    closing_tag = models.CharField(max_length=100, default = "</a>") 
    link_text = models.CharField(max_length = 400, null = True, blank = True)
    link = models.CharField(max_length = 400, null = True, blank = True)

class UserImage(models.Model):
    opening_tag = models.CharField(max_length=100, default = "<img>")
    closing_tag = models.CharField(max_length=100, default = "</img>") 
    user_image = models.ImageField(upload_to = 'user_image', null = True)
    
class Navbar(models.Model):
    # num_of_tabs = models.IntegerField( null = True, blank = True)
    tab_text = models.JSONField(default=list, blank=True, null=True)
    link_text = models.JSONField(default=list, blank=True, null=True)
    # taking number of multiple fields and then take length of array to make the loop 
    # todo:
    # tabs to be stored

class Table(models.Model):
    row = models.IntegerField(null = True, blank = True)
    col = models.IntegerField(null = True, blank = True)
    row_data = models.JSONField(default=list, blank=True, null=True)
    col_data = models.JSONField(default=list, blank=True, null=True)

class Button(models.Model):
    opening_tag = models.CharField(max_length=100, default = "<button>")
    closing_tag = models.CharField(max_length=100, default = "</button>") 
    text = models.CharField(max_length = 200, null = True, blank = True)

class Select(models.Model):
    choices = models.JSONField(default=list, blank=True, null=True)

# class Sidbar(models.Model):
#     menu_items = models.JSONField(default=list, blank=True, null=True)


#table, navbar, select to be done later as i dont know the variables

class Tag(models.Model):
    tags_dict = models.JSONField(default=list, blank=True, null=True)
