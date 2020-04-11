# Generated by Django 3.0.4 on 2020-04-11 13:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Famille',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'familles',
            },
        ),
        migrations.CreateModel(
            name='Parcours',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'parcours',
            },
        ),
        migrations.CreateModel(
            name='PointBiodiversite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomSc', models.CharField(max_length=120)),
                ('nomFr', models.CharField(blank=True, max_length=120)),
                ('numeroParcours', models.PositiveIntegerField()),
                ('ecorceRemarquable', models.BooleanField(default=False)),
                ('famille', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biodiversite.Famille')),
                ('parcours', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biodiversite.Parcours')),
            ],
            options={
                'db_table': 'pointBio',
            },
        ),
    ]
