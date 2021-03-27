from django.urls import path
from .views import FrontEnd

urlpatterns = [
    path("", FrontEnd, name="home_page"),
]
