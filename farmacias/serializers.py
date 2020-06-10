from rest_framework.serializers import ModelSerializer

from farmacias.models import Farmacia


class FarmaciaSerializer(ModelSerializer):
    class Meta:
        model = Farmacia
        fields = ["comuna_nombre","fecha","fk_comuna","fk_region","funcionamiento_dia",
                    "funcionamiento_hora_apertura","funcionamiento_hora_cierre",
                    "local_direccion","local_id","local_lat","local_lng",
                    "local_nombre","local_telefono","localidad_nombre"]


class ComunaSerializer(ModelSerializer):
    class Meta:
        model = Farmacia
        fields = ["comuna_nombre","fk_comuna"]