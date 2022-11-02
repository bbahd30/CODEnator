from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from . import settings
from CODEnator import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'images', views.ImageViewset, basename='images'),
router.register(r'headings', views.HeadingViewset, basename='headings'),
router.register(r'paragraphs', views.ParagraphViewset, basename='paragraphs'),
router.register(r'hrs', views.HrViewset, basename='hrs'),
router.register(r'anchors', views.AnchorViewset, basename='anchors'),
router.register(r'userimages', views.UserImageViewset, basename='userimages'),
router.register(r'navbars', views.NavbarViewset, basename='navbars'),
router.register(r'tables', views.TableViewset, basename='tables'),
router.register(r'buttons', views.ButtonViewset, basename='buttons'),
router.register(r'selects', views.SelectViewset, basename='selects'),
router.register(r'sidebars', views.SidebarViewset, basename='sidebars'),
router.register(r'tags', views.TagViewset, basename='tags'),



urlpatterns = [
    path('upload/', views.uploader),
    path('admin/', admin.site.urls),
    # path('extract/', views.ui_extract),
    path('', include(router.urls)),
    path('store/', views.store, name='store'),
    path('input/', views.input, name='input'),
    path('imageslatest', views.ImageViewset.as_view
    ({
        'get': 'get_data'
    }), name='store'),
    path('tagslatest/', views.TagViewset.as_view
    ({
        'get': 'get_data'
    }), name='tags'),
    path('paragraphslatest/', views.ParagraphViewset.as_view
    ({
        'get': 'get_data'
    }), name='paragraphs'),
     path('anchorslatest/', views.AnchorViewset.as_view
    ({
        'get': 'get_data'
    }), name='anchors'),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

print(static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT))