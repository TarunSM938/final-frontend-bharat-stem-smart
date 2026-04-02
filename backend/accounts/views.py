from django.shortcuts import render

# Create your views here.
# accounts/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken
from .models import AdminUser


@api_view(['POST'])
def create_admin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Username and password required"}, status=400)

    if AdminUser.objects(username=username).first():
        return Response({"error": "User already exists"}, status=400)

    hashed = make_password(password)
    AdminUser(username=username, password=hashed).save()

    return Response({"message": "Admin created successfully"})


@api_view(['POST'])
def login_admin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Username and password required"}, status=400)

    user = AdminUser.objects(username=username).first()

    if not user:
        return Response({"error": "Invalid credentials"}, status=401)

    if not check_password(password, user.password):
        return Response({"error": "Invalid credentials"}, status=401)

    # Generate token manually without Django user
    refresh = RefreshToken()

    # Store username inside token payload
    refresh['username'] = username
    refresh['is_admin'] = True

    return Response({
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "username": username
    })