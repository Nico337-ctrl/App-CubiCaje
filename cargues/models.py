from django.db import models

# Create your models here.

class Cargue(models.Model):
    id = models.AutoField(primary_key=True)
    # idCargue = models.IntegerField()
    cantidadCajas = models.IntegerField() 
    altoCaja = models.IntegerField()
    anchoCaja  = models.IntegerField()
    largoCaja  = models.IntegerField()
    altoContenedor  = models.IntegerField()
    anchoContenedor  = models.IntegerField()
    largoContenedor  = models.IntegerField()
    
    # def __str__(self):
    #     return self.idCargue