from django.urls import path
from .views import create_admin, login_admin

urlpatterns = [
    path('create-user/', create_admin),
    path('login/', login_admin),
]