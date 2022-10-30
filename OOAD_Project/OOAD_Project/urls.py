from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from . import settings
from CODEnator import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.uploader)
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

print(static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT))