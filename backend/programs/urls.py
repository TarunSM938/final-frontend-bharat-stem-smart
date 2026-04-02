# programs/urls.py

from django.urls import path
from .views import (
    get_published_programs,
    get_all_programs,
    create_program,
    get_single_program,
    edit_program,
    delete_program,
    toggle_publish,
)

urlpatterns = [
    # PUBLIC
    path('', get_published_programs),              # GET  /api/programs/

    # ADMIN
    path('all/', get_all_programs),                # GET  /api/programs/all/
    path('create/', create_program),               # POST /api/programs/create/
    path('<str:program_id>/', get_single_program), # GET  /api/programs/<id>/
    path('<str:program_id>/edit/', edit_program),  # PUT  /api/programs/<id>/edit/
    path('<str:program_id>/delete/', delete_program), # DELETE /api/programs/<id>/delete/
    path('<str:program_id>/publish/', toggle_publish), # PATCH /api/programs/<id>/publish/
]