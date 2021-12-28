from .views import send_Message, viewMessage, viewAdminMessage
from django.urls import path

urlpatterns = [

    path("send_message", send_Message.as_view()),
    path("read_message", viewMessage.as_view()),
    path("read_admin_message/<int:loanee_id>/", viewAdminMessage.as_view()),
]
