from django.db import models




class TrackingModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ('-created_at',)


class Loanee(models.Model):
    f_name = models.CharField(max_length=15)
    l_name = models.CharField(max_length=15)
    contact = models.CharField(max_length=15)
    amount = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ('-created_at',)



