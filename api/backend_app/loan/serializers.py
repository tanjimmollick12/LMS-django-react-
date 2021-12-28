from rest_framework import serializers
from .models import Loan


from rest_framework import serializers
from django.db import models


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = '__all__'
