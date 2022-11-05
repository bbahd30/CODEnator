from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from . import settings
from CODEnator import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

# router.register(r'upload', views.ImageViewset, basename='images'),
# router.register(r'headings', views.HeadingViewset, basename='headings'),
router.register(r'h1', views.H1Viewset, basename='h1'), #changed
router.register(r'h2', views.H2Viewset, basename='h2'), #changed
router.register(r'h3', views.H3Viewset, basename='h3'), #changed
router.register(r'h4', views.H4Viewset, basename='h4'), #changed 
router.register(r'h5', views.H5Viewset, basename='h5'), #changed
router.register(r'h6', views.H6Viewset, basename='h6'), #changed
router.register(r'paragraphs', views.ParagraphViewset, basename='paragraphs'),
router.register(r'hrs', views.HrViewset, basename='hrs'),
router.register(r'anchors', views.AnchorViewset, basename='anchors'),
router.register(r'userimages', views.UserImageViewset, basename='userimages'),
router.register(r'navbars', views.NavbarViewset, basename='navbars'),
router.register(r'tables', views.TableViewset, basename='tables'),
router.register(r'buttons', views.ButtonViewset, basename='buttons'),
router.register(r'selects', views.SelectViewset, basename='selects'),
# router.register(r'sidebars', views.SidebarViewset, basename='sidebars'),
router.register(r'tags', views.TagViewset, basename='tags'),



urlpatterns = [
    path('upload/', views.uploader),
    path('extract/', views.ui_extract),
    path('admin/', admin.site.urls),
    path('userimage/', views.userimage_uploader),
    # path('extract/', views.ui_extract),
    path('', include(router.urls)),
    path('store/', views.store, name='store'),
    # path('input/', views.input, name='input'),
    path('imageslatest', views.ImageViewset.as_view
    ({
        'get': 'get_data'
    }), name='store'),
    path('tagslatest/', views.TagViewset.as_view
    ({
        'get': 'get_data'
    }), name='tags'),
    path('h1latest/', views.H1Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h1'),
    path('h2latest/', views.H2Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h2'),
    path('h3latest/', views.H3Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h3'),
    path('h4latest/', views.H4Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h4'),
    path('h5latest/', views.H5Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h5'),
    path('h6latest/', views.H6Viewset.as_view
    ({
        'get': 'get_data'
    }), name='h6'),
    path('paragraphslatest/', views.ParagraphViewset.as_view
    ({
        'get': 'get_data'
    }), name='paragraphs'),
    path('hrslatest/', views.HrViewset.as_view
    ({
        'get': 'get_data'
    }), name='hrs'),
    path('anchorslatest/', views.AnchorViewset.as_view
    ({
        'get': 'get_data'
    }), name='anchors'),
    path('navbarslatest/', views.NavbarViewset.as_view
    ({
        'get': 'get_data'
    }), name='navbars'),
    path('tableslatest/', views.TableViewset.as_view
    ({
        'get': 'get_data'
    }), name='tables'),
    path('selectslatest/', views.SelectViewset.as_view
    ({
        'get': 'get_data'
    }), name='selects'),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

print(static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT))