from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import viewsets

class HeadingViewset(viewsets.ModelViewSet):
    queryset = Heading.objects.all()
    serializer_class = HeadingSerializer