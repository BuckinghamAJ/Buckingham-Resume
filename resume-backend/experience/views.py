from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Experience
from .serializer import ExperienceSerializer

# Create your views here.

@api_view(['GET'])
def grabExperiences(request):

    experiences = Experience.objects.all()

    serializer = ExperienceSerializer(experiences, context={"Experiences": request}, many=True)
    
    return Response(serializer.data)