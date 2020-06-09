import requests
import json
from tornado import escape
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import Farmacia
from .serializers import FarmaciaSerializer


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


