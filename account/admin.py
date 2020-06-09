from django.contrib import admin
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.admin import UserAdmin
from .models import BiceUser
# Register your models here.


class BiceUserAdmin(UserAdmin):

    ordering = ('-id', 'email',)
    list_display = ('id','username',  'email')
    list_display_links = ('username', 'email')
    list_filter = ('is_staff',)
    list_per_page = 10
    search_fields = ['first_name', 'last_name', 'email']
    # list_select_related = True
    # list_max_show_all = 2

    fieldsets = (
                    # (None, {'fields': ('rut', 'address', 'county', 'company', 'role', 'menu', 'view', 'template')}),
                ) + UserAdmin.fieldsets


admin.site.register(BiceUser, BiceUserAdmin)