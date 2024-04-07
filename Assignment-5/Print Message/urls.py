from django.contrib import admin
from django.urls import path
from message1 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="homepage"),
    path('nwc/', views.nwc, name="nwcpage"),
]

