from django.urls import path

from .viewsets import *

urlpatterns = [
    path('v1/list/', FarmaciaView.as_view(), name="list_farm"),
]
