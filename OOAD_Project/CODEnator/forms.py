from .models import *
from django import forms

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ['screenshot']
        labels = {'screenshot': ""}

class UserImageForm(forms.ModelForm):
    class Meta:
        model = UserImage
        fields = ['user_image']
        labels = {'user_image': ""}


