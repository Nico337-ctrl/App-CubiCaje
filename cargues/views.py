from django.shortcuts import render
from rest_framework import viewsets
from .serializer import CargueSerializer
from .models import Cargue
# Create your views here.

class CarguesViews(viewsets.ModelViewSet):
    serializer_class = CargueSerializer
    queryset = Cargue.objects.all()