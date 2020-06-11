from django.test import TestCase
from .models import Farmacia
from .serializers import ComunaSerializer, FarmaciaSerializer
from django.urls import reverse
from rest_framework import status
from django.test import TestCase, Client
from django.db.models import Count

client = Client()


class FarmaciaTest(TestCase):
    """ Test para Farmacia model """

    def setUp(self):
        Farmacia.objects.create(comuna_nombre="SAN MIGUEL",
                                fecha="10-06-2020",
                                fk_comuna=127,
                                fk_region=7,
                                funcionamiento_dia="miercoles",
                                funcionamiento_hora_apertura="09:00 hrs.",
                                funcionamiento_hora_cierre="21:00 hrs.",
                                local_direccion="AVENIDA JOSE MIGUEL CARRERA 5832",
                                local_id=6299,
                                local_lat="",
                                local_lng="",
                                local_nombre="DR. SIMI",
                                local_telefono="+56",
                                localidad_nombre="SAN MIGUEL")

        Farmacia.objects.create(comuna_nombre="SAN MIGUEL",
                                fecha="10-06-2020",
                                fk_comuna=127,
                                fk_region=7,
                                funcionamiento_dia="miercoles",
                                funcionamiento_hora_apertura="09:00 hrs.",
                                funcionamiento_hora_cierre="22:30 hrs.",
                                local_direccion="GRAN AVENIDA JOSé MIGUEL CARRERA N° 3052",
                                local_id=6293,
                                local_lat="-33.482413",
                                local_lng="-70.648958",
                                local_nombre="CARYVON",
                                local_telefono="+56",
                                localidad_nombre="SAN MIGUEL")

        Farmacia.objects.create(comuna_nombre="SAN BERNARDO",
                                fecha="10-06-2020",
                                fk_comuna=124,
                                fk_region=7,
                                funcionamiento_dia="miercoles",
                                funcionamiento_hora_apertura="10:00 hrs.",
                                funcionamiento_hora_cierre="19:00 hrs.",
                                local_direccion="AVENIDA SAN JOSé N° 501, LOCAL 3",
                                local_id=6292,
                                local_lat="-33.596344",
                                local_lng="-70.705373",
                                local_nombre="LIFEPHARMACY",
                                local_telefono="+56",
                                localidad_nombre="SAN BERNARDO")

        Farmacia.objects.create(comuna_nombre="CERRILLOS",
                                fecha="10-06-2020",
                                fk_comuna=85,
                                fk_region=7,
                                funcionamiento_dia="miercoles",
                                funcionamiento_hora_apertura="11:00 hrs.",
                                funcionamiento_hora_cierre="19:00 hrs.",
                                local_direccion="CIUDAD DE MÉXICO 302-B",
                                local_id=6178,
                                local_lat="-33.509793",
                                local_lng="-70.736941",
                                local_nombre="FARMAVEN",
                                local_telefono="+56",
                                localidad_nombre="CERRILLOS")

        Farmacia.objects.create(comuna_nombre="ESTACION CENTRAL",
                                fecha="10-06-2020",
                                fk_comuna=92,
                                fk_region=7,
                                funcionamiento_dia="miercoles",
                                funcionamiento_hora_apertura="10:00 hrs.",
                                funcionamiento_hora_cierre="20:00 hrs.",
                                local_direccion="SAN ALBERTO HURTADO 59",
                                local_id=6176,
                                local_lat="-33.454613",
                                local_lng="-70.690985",
                                local_nombre="DEL DR. SIMI",
                                local_telefono="+56",
                                localidad_nombre="ESTACION CENTRAL")

    def test_locate_farm(self):
        """
        Consultar datos de Farmacia
        :return:
        """
        farm_locate1 = Farmacia.objects.get(local_lat='-33.454613', local_lng='-70.690985')
        farm_locate2 = Farmacia.objects.get(local_lat='-33.596344', local_lng='-70.705373')

        self.assertEqual(
            farm_locate1.get_locate(), "SAN ALBERTO HURTADO 59 Lat: -33.454613 Lon:-70.690985")
        self.assertEqual(
            farm_locate2.get_locate(), "AVENIDA SAN JOSé N° 501, LOCAL 3 Lat: -33.596344 Lon:-70.705373")

    def test_get_all_comunas(self):
        """
        Test unitarios de listado de comunas
        :return:
        """
        response = client.get(reverse('get_comunas'))
        comunas = Farmacia.objects.values('comuna_nombre', 'fk_comuna').annotate(dcount=Count('comuna_nombre'))
        serializer = ComunaSerializer(comunas, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_all_farms(self):
        """
        Test Unitario listado total de Farmacia
        :return:
        """
        response = client.get(reverse('get_farms'))
        farmacias = Farmacia.objects.all().order_by("-id")
        serializer = FarmaciaSerializer(farmacias, many=True)
        self.assertEqual(response.data["results"], serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_farms_comunas(self):
        """
        Test Unitario para farmacias filtrado
        :return:
        """
        url=str((reverse('get_farms')))+"?id_comuna=92"
        response = client.get(url)

        farmacias = Farmacia.objects.filter(fk_comuna=92).order_by("-id")
        serializer = FarmaciaSerializer(farmacias, many=True)


        self.assertEqual(response.data["results"], serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
