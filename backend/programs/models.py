from django.db import models

# Create your models here.
# programs/models.py

from mongoengine import Document, StringField, FloatField, DateTimeField
import datetime

class Program(Document):
    title = StringField(required=True)
    subtitle = StringField()
    description = StringField()
    price = FloatField()
    image = StringField()
    status = StringField(default="draft")
    created_at = DateTimeField(default=datetime.datetime.utcnow)
    updated_at = DateTimeField(default=datetime.datetime.utcnow)

    meta = {'collection': 'programs'}