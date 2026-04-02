# accounts/auth.py

from functools import wraps
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken


def admin_required(func):
    @wraps(func)
    def wrapper(request, *args, **kwargs):
        auth_header = request.headers.get('Authorization')

        if not auth_header or not auth_header.startswith('Bearer '):
            return Response({"error": "No token provided"}, status=401)

        token_str = auth_header.split(' ')[1]

        try:
            # Just decode and validate the token - don't look up Django user
            token = AccessToken(token_str)
            # token is valid if no exception thrown
        except Exception as e:
            return Response({"error": "Invalid or expired token"}, status=401)

        return func(request, *args, **kwargs)

    return wrapper