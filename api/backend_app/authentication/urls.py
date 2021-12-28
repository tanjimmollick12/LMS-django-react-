from authentication import views
from django.urls import path

urlpatterns = [
    path('register', views.RegisterAPIView.as_view(), name="register"),
    path('login', views.LoginAPIView.as_view(), name="login"),
    path('addloanee', views.AddLoanee.as_view(), name="addloanee"),
    path('loaneelist', views.LoaneeList.as_view(), name="loaneelist"),
    path('addemi/<int:loanee_id>/', views.AddEmi.as_view(), name="loaneelist"),
    path('emilist', views.EmiList.as_view(), name="emilist"),
    path('user', views.AuthUserAPIView.as_view(), name="user"),

]
