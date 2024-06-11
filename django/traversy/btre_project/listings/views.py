from django.shortcuts import render
from .models import Listing
from .models import Realtor

# Create your views here.
    
def index(request):
    listings = Listing.objects.all()
    realtors = Realtor.objects.all()

    context = {
        'listings': listings,
        'realtors': realtors,
    }
    return render(request, 'listings/listings.html', context)

def listing(request):
    return render(request, 'listings/listing.html')

def search(request):
    return render(request, 'listings/search.html')
