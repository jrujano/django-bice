import requests
import json
from tornado import escape
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.db.models import Count

from .pagination import CustomPagination

from .models import Farmacia
from .serializers import FarmaciaSerializer, ComunaSerializer


class FarmaciaView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request,format=None):
        queryset = Farmacia.objects.all()
        if queryset.count()==0:
            payload = {'reg_id': 7}
            url = "https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7"
            r = requests.get(url, params=payload)
            if r.status_code == 200:
                data = escape.json_decode(r.text)
                for item in data:
                    Farmacia.objects.create(**item)
        farms = Farmacia.objects.all()
        serializer = FarmaciaSerializer(farms, many=True)
        return Response(serializer.data)

class FarmView(generics.ListAPIView):
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

        return queryset_list.order_by("local_nombre")


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
    permission_classes = (AllowAny,)
    queryset = Farmacia.objects.all()
    serializer_class = ComunaSerializer

    def get_queryset(self):
        # queryset = Farmacia.objects.raw('SELECT comuna_nombre FROM farmacias_farmacia GROUP BY comuna_nombre')
        queryset= Farmacia.objects.values('comuna_nombre','fk_comuna').annotate(dcount=Count('comuna_nombre'))

        return queryset

