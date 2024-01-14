from django.shortcuts import render
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.mixins import DataMixin



# Create your views here.

def home(request):
    
    return render(request, 'main/index_1.html', {'image_url':  '{% static "main/images/1.png" %}'})

def personal_area(request):
    return render(request, 'main/index_2.html')

def forum(request):
    return render(request, 'main/index_4.html')

