from django.db import models

# Create your models here.
# accounts/models.py

from mongoengine import Document, StringField

class AdminUser(Document):
    username = StringField(required=True, unique=True)
    password = StringField(required=True)

    meta = {'collection': 'admin_users'}