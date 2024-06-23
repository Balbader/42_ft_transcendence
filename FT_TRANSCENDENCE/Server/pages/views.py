from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, "pages/index.html")


def login(request):
    return render(request, "pages/login.html")


def about(request):
    return render(request, "pages/about.html")


def howItWorks(request):

    return render(request, "pages/how-it-works.html")
