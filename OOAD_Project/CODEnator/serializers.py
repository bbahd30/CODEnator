from rest_framework import serializers
from CODEnator.models import *

class HeadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heading
        fields = '__all__'