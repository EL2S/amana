# Generated by Django 5.0.6 on 2024-07-16 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amana', '0002_summary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insurance',
            name='certificate_number',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='insurance',
            name='policy_number',
            field=models.CharField(max_length=255),
        ),
    ]
