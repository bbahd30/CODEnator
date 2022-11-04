from rest_framework import serializers
from CODEnator.models import *

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class H1Serializer(serializers.ModelSerializer):
    class Meta:
        model = H1
        fields = '__all__'

class H2Serializer(serializers.ModelSerializer):
    class Meta:
        model = H2
        fields = '__all__'

class H3Serializer(serializers.ModelSerializer):
    class Meta:
        model = H3
        fields = '__all__'

class H4Serializer(serializers.ModelSerializer):
    class Meta:
        model = H4
        fields = '__all__'

class H5Serializer(serializers.ModelSerializer):
    class Meta:
        model = H5
        fields = '__all__'

class H6Serializer(serializers.ModelSerializer):
    class Meta:
        model = H6
        fields = '__all__'

class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = '__all__'

class HrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hr
        fields = '__all__'

class AnchorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anchor
        fields = '__all__'

class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImage
        fields = '__all__'

class NavbarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navbar
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'

class ButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Button
        fields = '__all__'

class SelectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Select
        fields = '__all__'

# class SidebarSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Sidebar
#         fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'