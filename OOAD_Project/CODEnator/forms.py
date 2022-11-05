from .models import *
from django import forms

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = '__all__'

class UserImageForm(forms.ModelForm):
    class Meta:
        model = UserImage
        fields = ['user_image']

