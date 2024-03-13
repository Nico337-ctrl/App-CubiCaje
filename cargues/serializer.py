from rest_framework import serializers
from .models import Cargue
class CargueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargue
        fields = '__all__'
        