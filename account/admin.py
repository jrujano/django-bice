from django.contrib import admin

# Register your models here.


from django.contrib import admin
from .models import BiceUser
class BiceUserAdmin(admin.ModelAdmin):
    model = BiceUser

admin.site.register(BiceUser, BiceUserAdmin)