from django.db import models


# Create your models here.
class Loan(models.Model):
    name = models.CharField(max_length=20)
    rate = models.FloatField()
    time = models.FloatField()
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name
