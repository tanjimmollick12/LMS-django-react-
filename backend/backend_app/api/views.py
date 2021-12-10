from django.http import JsonResponse

# Create your views here.
def home(request):
    return JsonResponse({
            'info':'CSE-299',
            'name':'group1'

    })