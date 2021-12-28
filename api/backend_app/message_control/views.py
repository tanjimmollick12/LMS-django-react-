from django.db.models import Q
from rest_framework import permissions, status, response

from rest_framework.views import APIView

from .models import Message
from .serializers import MessageSerializer


class send_Message(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response()


class viewMessage(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user.id
        model = Message.objects.filter(Q(sender_id=user) | Q(receiver_id=user))
        serializer = MessageSerializer(model, many=True)
        return response.Response(serializer.data)


class viewAdminMessage(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request,loanee_id):
        user = request.user.id
        model = Message.objects.filter(Q(sender_id=user) & Q(receiver_id=loanee_id)
                                       | Q(sender_id=loanee_id) & Q(receiver_id=user) )

        serializer = MessageSerializer(model, many=True)
        return response.Response(serializer.data)
