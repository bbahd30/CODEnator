from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.decorators import action

class ImageViewset(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    
    def get_data(self, request):
        model_data = ImageSerializer(Image.objects.last())
        return Response(model_data.data)

class H1Viewset(viewsets.ModelViewSet):
    queryset = H1.objects.all()
    serializer_class = H1Serializer

    def get_data(self, request):
        model_data = H1Serializer(H1.objects.last())
        return Response(model_data.data)

class H2Viewset(viewsets.ModelViewSet):
    queryset = H2.objects.all()
    serializer_class = H2Serializer

    def get_data(self, request):
        model_data = H2Serializer(H2.objects.last())
        return Response(model_data.data)

class H3Viewset(viewsets.ModelViewSet):
    queryset = H3.objects.all()
    serializer_class = H3Serializer

    def get_data(self, request):
        model_data = H3Serializer(H3.objects.last())
        return Response(model_data.data)

class H4Viewset(viewsets.ModelViewSet):
    queryset = H4.objects.all()
    serializer_class = H4Serializer

    def get_data(self, request):
        model_data = H4Serializer(H4.objects.last())
        return Response(model_data.data)

class H5Viewset(viewsets.ModelViewSet):
    queryset = H5.objects.all()
    serializer_class = H5Serializer

    def get_data(self, request):
        model_data = H5Serializer(H5.objects.last())
        return Response(model_data.data)

class H6Viewset(viewsets.ModelViewSet):
    queryset = H6.objects.all()
    serializer_class = H6Serializer

    def get_data(self, request):
        model_data = H6Serializer(H6.objects.last())
        return Response(model_data.data)

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

    def get_data(self, request):
        model_data = UserImageSerializer(UserImage.objects.last())
        return Response(model_data.data)

class NavbarViewset(viewsets.ModelViewSet):
    queryset = Navbar.objects.all()
    serializer_class = NavbarSerializer

    def create(self, request):
        data = request.data
        arr_tabs_text = data.get('tab_text').split("\n")
        arr_tabs_link = data.get('link_text').split("\n")
        Navbar.objects.create( 
        tab_text = arr_tabs_text, link_text = arr_tabs_link)
        return Response("done")

    def get_data(self, request):
        model_data = NavbarSerializer(Navbar.objects.last())
        return Response(model_data.data)

class TableViewset(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

class ButtonViewset(viewsets.ModelViewSet):
    queryset = Button.objects.all()
    serializer_class = ButtonSerializer

    def get_data(self, request):
        model_data = ButtonSerializer(Button.objects.last())
        return Response(model_data.data)

class DropdownViewset(viewsets.ModelViewSet):
    queryset = Dropdown.objects.all()
    serializer_class = DropdownSerializer

    def create(self, request):
        data = request.data
        field = data.get('field')
        arr_options = data.get('options').split("\n")
        Dropdown.objects.create(options = arr_options, field = field)
        return Response("done")
    
    def get_data(self, request):
        model_data = DropdownSerializer(Dropdown.objects.last())
        return Response(model_data.data)
# class SidebarViewset(viewsets.ModelViewSet):
#     queryset = Sidebar.objects.all()
#     serializer_class = SidebarSerializer

class TagViewset(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_data(self, request):
        model_data = TagSerializer(Tag.objects.last())
        return Response(model_data.data)