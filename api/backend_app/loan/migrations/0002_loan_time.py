# Generated by Django 4.0 on 2021-12-26 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loan', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='loan',
            name='time',
            field=models.FloatField(default='3'),
            preserve_default=False,
        ),
    ]
