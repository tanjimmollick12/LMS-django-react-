from rest_framework import serializers
from authentication.models import User, Emi, UserProfile
from django.contrib.auth import get_user_model


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'is_superuser')

    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)


class addLoanee(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'name', 'gender', 'loan_amount',
                  'rate', 'time', 'total_payable', 'address', 'mobile')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoaneeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'name', 'loan_amount', 'total_payable', 'gender',
                  'rate', 'password', 'time', 'address', 'mobile', 'token', 'is_superuser')

        read_only_fields = ['token']


class EmiSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Emi
        fields = '__all__'


class EmiListSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Emi
        fields = '__all__'


class TargetLoanee(serializers.ModelSerializer):
    User = get_user_model()

    class Meta:
        model = User
        fields = ['id', 'total_payable']

    def update(self, instance, validated_data):
        instance.toal_payable = validated_data.get('total_payable')
        instance.save()
        return instance
