from django.db import models


class Message(models.Model):
    sender = models.ForeignKey(
        "authentication.User", related_name="message_sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey(
        "authentication.User", related_name="message_receiver", on_delete=models.CASCADE)
    message = models.TextField(blank=True, null=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return f"message between {self.sender.username} and {self.receiver.username}"

    class Meta:
        ordering = ("-created_at",)

