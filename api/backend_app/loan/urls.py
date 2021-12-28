from loan import api
from django.urls import path

from loan.api import LoanList, editLoan, addLoan

urlpatterns = [
    path('loanlist', LoanList.as_view(), name="loanlist"),
    path('addloan', addLoan.as_view(), name="addloan"),
    path('editloan/<int:loan_id>/', editLoan.as_view(), name="editLoan"),
]
