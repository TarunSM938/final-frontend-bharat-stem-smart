# programs/views.py

import os
import datetime
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from django.conf import settings
from .models import Program
from accounts.auth import admin_required


# ─── Helper: serialize one program ───────────────────────────────────────────
def serialize_program(p):
    return {
        "id": str(p.id),
        "title": p.title,
        "subtitle": p.subtitle,
        "description": p.description,
        "price": p.price,
        "image": p.image,
        "status": p.status,
        "created_at": str(p.created_at),
        "updated_at": str(p.updated_at),
    }


# ─── PUBLIC: Get all published programs (used by Next.js frontend) ───────────
@api_view(['GET'])
def get_published_programs(request):
    programs = Program.objects(status="published").order_by('-created_at')
    return Response([serialize_program(p) for p in programs])


# ─── ADMIN: Get ALL programs including drafts ────────────────────────────────
@api_view(['GET'])
@admin_required
def get_all_programs(request):
    programs = Program.objects().order_by('-created_at')
    return Response([serialize_program(p) for p in programs])


# ─── ADMIN: Create new program ───────────────────────────────────────────────
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@admin_required
def create_program(request):
    data = request.data

    title = data.get('title')
    if not title:
        return Response({"error": "Title is required"}, status=400)

    image_path = None
    if 'image' in request.FILES:
        image_file = request.FILES['image']
        upload_dir = os.path.join(settings.MEDIA_ROOT, 'programs')
        os.makedirs(upload_dir, exist_ok=True)

        filename = f"{datetime.datetime.utcnow().timestamp()}_{image_file.name}"
        full_path = os.path.join(upload_dir, filename)

        with open(full_path, 'wb+') as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        image_path = f"/media/programs/{filename}"

    program = Program(
        title=title,
        subtitle=data.get('subtitle', ''),
        description=data.get('description', ''),
        price=float(data.get('price', 0)),
        image=image_path,
        status=data.get('status', 'draft'),
    )
    program.save()

    return Response({
        "message": "Program created successfully",
        "program": serialize_program(program)
    }, status=201)


# ─── ADMIN: Get single program by ID ─────────────────────────────────────────
@api_view(['GET'])
@admin_required
def get_single_program(request, program_id):
    try:
        program = Program.objects(id=program_id).first()
        if not program:
            return Response({"error": "Program not found"}, status=404)
        return Response(serialize_program(program))
    except Exception:
        return Response({"error": "Invalid ID"}, status=400)


# ─── ADMIN: Edit program ──────────────────────────────────────────────────────
@api_view(['PUT'])
@parser_classes([MultiPartParser, FormParser])
@admin_required
def edit_program(request, program_id):
    try:
        program = Program.objects(id=program_id).first()
        if not program:
            return Response({"error": "Program not found"}, status=404)
    except Exception:
        return Response({"error": "Invalid ID"}, status=400)

    data = request.data

    if data.get('title'):
        program.title = data.get('title')
    if data.get('subtitle'):
        program.subtitle = data.get('subtitle')
    if data.get('description'):
        program.description = data.get('description')
    if data.get('price'):
        program.price = float(data.get('price'))
    if data.get('status'):
        program.status = data.get('status')

    # Handle new image upload
    if 'image' in request.FILES:
        image_file = request.FILES['image']
        upload_dir = os.path.join(settings.MEDIA_ROOT, 'programs')
        os.makedirs(upload_dir, exist_ok=True)

        filename = f"{datetime.datetime.utcnow().timestamp()}_{image_file.name}"
        full_path = os.path.join(upload_dir, filename)

        with open(full_path, 'wb+') as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        program.image = f"/media/programs/{filename}"

    program.updated_at = datetime.datetime.utcnow()
    program.save()

    return Response({
        "message": "Program updated successfully",
        "program": serialize_program(program)
    })


# ─── ADMIN: Delete program ────────────────────────────────────────────────────
@api_view(['DELETE'])
@admin_required
def delete_program(request, program_id):
    try:
        program = Program.objects(id=program_id).first()
        if not program:
            return Response({"error": "Program not found"}, status=404)
        program.delete()
        return Response({"message": "Program deleted successfully"})
    except Exception:
        return Response({"error": "Invalid ID"}, status=400)


# ─── ADMIN: Toggle publish / draft ───────────────────────────────────────────
@api_view(['PATCH'])
@admin_required
def toggle_publish(request, program_id):
    try:
        program = Program.objects(id=program_id).first()
        if not program:
            return Response({"error": "Program not found"}, status=404)

        program.status = "published" if program.status == "draft" else "draft"
        program.updated_at = datetime.datetime.utcnow()
        program.save()

        return Response({
            "message": f"Program is now {program.status}",
            "status": program.status
        })
    except Exception:
        return Response({"error": "Invalid ID"}, status=400)