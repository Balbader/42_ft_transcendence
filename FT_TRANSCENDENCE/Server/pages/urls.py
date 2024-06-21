from django.urls import path
from . import views

urlpatterns = [
		path('', views.index, name='index'),
		path("login", views.login, name="login"),
		path("about", views.about, name="about"),
		path("whoWeAre", views.whoWeAre, name="whoWeAre")
]