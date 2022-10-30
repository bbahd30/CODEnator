from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from . import settings
from CODEnator import views
from django.urls import path, include
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'options', views.ComponentViewset, basename='options'),


urlpatterns = [
    path('upload', views.uploader),
    path('admin/', admin.site.urls),
    # path('extract/', views.ui_extract),
    # path('', include(router.urls)),
    path('input', views.input, name='input')
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

print(static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT))