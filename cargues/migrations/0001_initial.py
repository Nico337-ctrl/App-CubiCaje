# Generated by Django 5.0.3 on 2024-03-11 19:07

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Cargue",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("cantidadCajas", models.IntegerField(max_length=200)),
                ("altoCaja", models.IntegerField(max_length=200)),
                ("anchoCaja", models.IntegerField(max_length=200)),
                ("largoCaja", models.IntegerField(max_length=200)),
                ("altoContenedor", models.IntegerField(max_length=200)),
                ("anchoContenedor", models.IntegerField(max_length=200)),
                ("largoContenedor", models.IntegerField(max_length=200)),
            ],
        ),
    ]