from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from authentication import serializers
from authentication.models import User, Emi
from authentication.serializers import RegisterSerializer, LoginSerializer, addLoanee, LoaneeListSerializer, \
    EmiSerializer, TargetLoanee, EmiListSerializer
from rest_framework import response, status, permissions, viewsets
from django.contrib.auth import authenticate
from django.db import transaction


class AuthUserAPIView(GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = RegisterSerializer(user)
        return response.Response({'user': serializer.data})


class RegisterAPIView(GenericAPIView):
    authentication_classes = []

    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if User.objects.filter(is_superuser=True).exists():
            return response.Response({'message':"You can't register for admin"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            if serializer.is_valid():
                serializer.save()
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)

        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddLoanee(GenericAPIView):
    permission_classes = (permissions.IsAdminUser,)
    serializer_class = addLoanee

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.validated_data["total_payable"] = request.data["loan_amount"] * (
                pow((1 + request.data["rate"] / 100), request.data["time"]))
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)

        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoaneeList(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request):
        model = User.objects.filter(is_superuser=False)
        serializer = LoaneeListSerializer(model, many=True)
        return Response(serializer.data)


class AddEmi(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get_loanee(self, loanee_id):
        try:
            model = User.objects.get(id=loanee_id)
            return model
        except User.DoesNotExist:
            return

    def post(self, request, loanee_id):
        if not self.get_loanee(loanee_id):
            return Response(f"Loan with id: {loanee_id} is not found", status=status.HTTP_404_NOT_FOUND)
        serializer = EmiSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': f"EMI added to {loanee_id}'s Loanee's account"}, status=status.HTTP_201_CREATED)

    # def get(self, request):
    #     # model = User.objects.filter(id=request.data["loanee_id"])
    #
    #     model = Emi.objects.all()
    #     serializer = EmiSerializer(model, many=True)
    #     return Response(serializer.data)


class LoginAPIView(GenericAPIView):
    authentication_classes = []

    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)

        user = authenticate(username=email, password=password)

        if user:
            serializer = self.serializer_class(user)

            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response({'message': "Invalid credentials, try again"}, status=status.HTTP_401_UNAUTHORIZED)


class EmiList(GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user.id
        model = Emi.objects.filter(loanee_id=user)
        serializer = EmiListSerializer(model, many=True)
        return Response(serializer.data)
