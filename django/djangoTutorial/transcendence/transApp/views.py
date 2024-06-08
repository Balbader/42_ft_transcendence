from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def home(request):
    context = {"name": "Basil Albader" }
    template = loader.get_template("transApp/home.html")
    return HttpResponse(template.render(context))

def profile(request):
    context = {"name": "Basil Albader" }
    template = loader.get_template("transApp/profile.html")
    return HttpResponse(template.render(context))
