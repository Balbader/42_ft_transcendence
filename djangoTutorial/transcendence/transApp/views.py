from django.shortcuts import render

# Create your views here.
def home(request):
    context = {"name": "Basil Alba"}
    return render(request, "transApp/home.html", context)
