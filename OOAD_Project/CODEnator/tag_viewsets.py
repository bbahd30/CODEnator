from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import viewsets

class ImageViewset(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    
    def get_data(self, request):
        model_data = ImageSerializer(Image.objects.last())
        return Response(model_data.data)

class HeadingViewset(viewsets.ModelViewSet):
    queryset = Heading.objects.all()
    serializer_class = HeadingSerializer

class ParagraphViewset(viewsets.ModelViewSet):
    queryset = Paragraph.objects.all()
    serializer_class = ParagraphSerializer

    def get_data(self, request):
        model_data = ParagraphSerializer(Paragraph.objects.last())
        return Response(model_data.data)

class HrViewset(viewsets.ModelViewSet):
    queryset = Hr.objects.all()
    serializer_class = HrSerializer

class AnchorViewset(viewsets.ModelViewSet):
    queryset = Anchor.objects.all()
    serializer_class = AnchorSerializer

    def get_data(self, request):
        model_data = AnchorSerializer(Anchor.objects.last())
        return Response(model_data.data)

class UserImageViewset(viewsets.ModelViewSet):
    queryset = UserImage.objects.all()
    serializer_class = UserImageSerializer

class NavbarViewset(viewsets.ModelViewSet):
    queryset = Navbar.objects.all()
    serializer_class = NavbarSerializer

class TableViewset(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

class ButtonViewset(viewsets.ModelViewSet):
    queryset = Button.objects.all()
    serializer_class = ButtonSerializer

class SelectViewset(viewsets.ModelViewSet):
    queryset = Select.objects.all()
    serializer_class = SelectSerializer

class SidebarViewset(viewsets.ModelViewSet):
    queryset = Sidebar.objects.all()
    serializer_class = SidebarSerializer

class TagViewset(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_data(self, request):
        model_data = TagSerializer(Tag.objects.last())
        return Response(model_data.data)