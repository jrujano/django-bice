from django.db import models

# Create your models here.


class Farmacia(models.Model):
    comuna_nombre= models.CharField(max_length=100, db_index=True)
    fecha = models.CharField(max_length=20)
    fk_comuna=models.PositiveSmallIntegerField('fk_comuna', db_index=True)
    fk_region=models.PositiveSmallIntegerField('fk_region', db_index=True)
    funcionamiento_dia= models.CharField(max_length=20)
    funcionamiento_hora_apertura= models.CharField(max_length=20)
    funcionamiento_hora_cierre= models.CharField(max_length=20)
    local_direccion= models.CharField(max_length=150)
    local_id=models.PositiveSmallIntegerField('local_id',unique=True)
    local_lat=models.CharField(max_length=20)
    local_lng= models.CharField(max_length=20)
    local_nombre= models.CharField(max_length=100)
    local_telefono=models.CharField(max_length=20)
    localidad_nombre= models.CharField(max_length=100)

    class Meta:
        verbose_name = ('Farmacia')
        verbose_name_plural = ('Farmacias')

    def __str__(self):
        return self.local_nombre

    def get_locate(self):
        return self.local_direccion + ' Lat: ' + self.local_lat + ' Lon:' + self.local_lng