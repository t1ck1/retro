from . import views
from django.urls import path

urlpatterns = [
    path('buy', views.buy),
    path('text', views.text),
    path('bace', views.bace),
    path('', views.index),
]
