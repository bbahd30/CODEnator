from .models import *
from django import forms

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ['screenshot']
            # widget = forms.Select(attrs = {'onchange': 'submit();'})

class UserImageForm(forms.ModelForm):
    class Meta:
        model = UserImage
        fields = ['user_image']

