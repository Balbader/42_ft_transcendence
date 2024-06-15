from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('listing', 'listing_id', 'name', 'user_id', 'email', 'phone', 'message', 'contact_date')
    list_display_links = ('user_id', 'name')
    search_fields = ('name', 'user_id', 'email', 'listing')
    list_per_page = 10

admin.site.register(Contact, ContactAdmin)
