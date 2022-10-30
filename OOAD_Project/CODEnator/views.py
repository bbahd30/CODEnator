from django.shortcuts import render
from .forms import *
from rest_framework import viewsets
# from .main_prog import *

# Create your views here.
def uploader(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    form = ImageForm()
    return render(request, 'CODEnator/index.html', {'form': form})


def input(request):
    # if request.method == 'POST':
    #     form = InputForm(request.POST)

    #     if form.is_valid():
    #         form.save()
    # form = InputForm()
    # return render(request, 'CODEnator/input.html', {'input_form': form})
    return render(request, 'CODEnator/input.html')

# todo:
# def ui_extract(request):
# add a redirect to input page



