from django.contrib import admin
from django.urls import path
from login import views  # Import views from login app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.user_login, name='login'),  # Directly include views
    path('success/', views.success, name='success'),  # Directly include views
]
