from rest_framework.serializers import ModelSerializer

from farmacias.models import Farmacia


class FarmaciaSerializer(ModelSerializer):
    class Meta:
        model = Farmacia
        fields = ["local_nombre","local_direccion","local_telefono","local_lat","local_lng","comuna_nombre","fk_comuna"]


class ComunaSerializer(ModelSerializer):
    class Meta:
        model = Farmacia
        fields = ["comuna_nombre","fk_comuna"]