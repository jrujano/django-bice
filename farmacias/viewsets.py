import requests
import json
from tornado import escape
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import generics
from drf_yasg.utils import no_body, swagger_auto_schema

from django.db.models import Count

from .pagination import CustomPagination

from .models import Farmacia
from .serializers import FarmaciaSerializer, ComunaSerializer


class FarmView(generics.ListAPIView):
    """Api de Farmacias.

    Parámetros de Filtros:

        id_comuna -- Id para filtrar comunas

        nombre -- Cadena para hacer busquedas por nombre local
        


    Devuelve en la data de las farmacias:
    
        {
            "pagination": {
                "total": 1,
                "per_page": 1,
                "current_page": 1,
                "last_page": 1,
                "next_page_url": "http://localhost:8000/farms/v1/list/?page=2",
                "previous_page_url": null
            },
            "results": [
                {
                "local_nombre": "AHUMADA",
                "local_direccion": "PADRE ALBERTO HURTADO 60. INTERIOR LIDER",
                "local_telefono": "+560227645558",
                "local_lat": "-33.452695",
                "local_lng": "-70.69151",
                "comuna_nombre": "ESTACION CENTRAL",
                "fk_comuna": 92
                }
            ]
        }

    Sin la data de las farmacias es nulo se conecta al API FARMANET.MINSAL.CL y sincroniza la data local:
        
        if self.queryset.count() == 0:
            payload = {'reg_id': 7}
            url = "https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7"
            r = requests.get(url, params=payload)
            if r.status_code == 200:
                data = escape.json_decode(r.text)
                for item in data:
                    Farmacia.objects.create(**item)
            

    
    parameters:
        - in: query
          name: offset
          schema:
            type: integer
          description: The number of items to skip before starting to collect the result set
        - in: query
          name: limit
          schema:
            type: integer
          description: The numbers of items to return
    """
    permission_classes = (AllowAny,)
    queryset = Farmacia.objects.all()
    serializer_class = FarmaciaSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        queryset_list =self.queryset
        id_comuna = self.request.GET.get("id_comuna")
        if id_comuna is not None:
            queryset_list = queryset_list.filter(fk_comuna=int(id_comuna))

        nombre = self.request.GET.get("nombre")
        if nombre is not None:
            queryset_list = queryset_list.filter(local_nombre__icontains=nombre)

        return queryset_list.order_by("-id")

    
    def get(self, request, *args, **kwargs):
        if self.queryset.count() == 0:
            payload = {'reg_id': 7}
            url = "https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7"
            r = requests.get(url, params=payload)
            if r.status_code == 200:
                data = escape.json_decode(r.text)
                for item in data:
                    Farmacia.objects.create(**item)
        return self.list(request, *args, **kwargs)

    # def list(self, request, *args, **kwargs):
    #     queryset = self.filter_queryset(self.get_queryset())
    #
    #     page = self.paginate_queryset(queryset)
    #
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response({"pagination": {
    #                         'total': queryset.count(),
    #                         'per_page': 20},
    #                     "results": serializer.data,
    #                     })

class ComunaView(generics.ListAPIView):
    """Api de Listado de Comunas.
    Este endpoint devuelve un listado de las comunas
    
    """
  
    permission_classes = (AllowAny,)
    queryset = Farmacia.objects.all()
    serializer_class = ComunaSerializer

    def get_queryset(self):
        # queryset = Farmacia.objects.raw('SELECT comuna_nombre FROM farmacias_farmacia GROUP BY comuna_nombre')
        queryset= Farmacia.objects.values('comuna_nombre','fk_comuna').annotate(dcount=Count('comuna_nombre'))

        return queryset

