from django.contrib import admin
from .models import Farmacia
# Register your models here.


@admin.register(Farmacia)
class FarmaciaAdmin(admin.ModelAdmin):
    '''Admin View for Menus'''

    list_display = ('local_nombre', 'local_telefono', 'comuna_nombre', 'localidad_nombre')
    list_filter = ('comuna_nombre', )
    ordering = ('-id',)