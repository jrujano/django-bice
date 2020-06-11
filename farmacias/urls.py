from django.urls import path, re_path

from .viewsets import *


from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Farmacias API",
      default_version='v1',
      description="Ejercicio Tecnico-Consorcio",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="johanrujano@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    # path('v1/list/', FarmaciaView.as_view(), name="list_farm"),
    path('v1/list/', FarmView.as_view()),
    path('v1/comu/', ComunaView.as_view()),
    re_path('api/docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

]
