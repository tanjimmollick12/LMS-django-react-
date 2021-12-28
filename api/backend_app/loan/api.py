from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import response, status, permissions
from .serializers import *
from django.contrib.auth import authenticate


class addLoan(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def post(self, request):
        serializer = LoanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class editLoan(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get_loan(self, loan_id):
        try:
            model = Loan.objects.get(id=loan_id)
            return model
        except Loan.DoesNotExist:
            return

    # def get(self, request, loan_id):
    #     if not self.get_loan(loan_id):
    #         return Response(f"Loan with id: {loan_id} is not found", status=status.HTTP_404_NOT_FOUND)
    #
    #     serializer = LoanSerializer(self.get_loan(loan_id), many=False)
    #     return Response(serializer.data)

    def put(self, request, loan_id):
        if not self.get_loan(loan_id):
            return Response(f"Loan with id: {loan_id} is not found", status=status.HTTP_404_NOT_FOUND)

        serializer = LoanSerializer(self.get_loan(loan_id), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, loan_id):
        if not self.get_loan(loan_id):
            return Response(f"Loan with id: {loan_id} is not found", status=status.HTTP_404_NOT_FOUND)

        model = self.get_loan(loan_id)
        model.delete()
        return Response(f"Loan with id: {loan_id} deleted Successfully", status=status.HTTP_202_ACCEPTED, )


class LoanList(APIView):
    authentication_classes = []

    def get(self, request):
        model = Loan.objects.all()
        serializer = LoanSerializer(model, many=True)
        return Response(serializer.data)
