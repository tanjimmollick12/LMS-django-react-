# Generated by Django 4.0 on 2021-12-27 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0008_alter_user_total_payable'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='total_payable',
            field=models.FloatField(default=0, verbose_name='total_payable'),
        ),
    ]
