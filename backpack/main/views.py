from django.shortcuts import render
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
from .models import Formula
from news.models import Post
from django.views.generic import DetailView
from django.contrib.auth.decorators import login_required
# from django.contrib.auth.mixins import DataMixin



# Create your views here.

def home(request):
    formula = Formula.objects.order_by()
    return render(request, 'main/index_1.html', {'formula':formula})

class FormulaDetail(DetailView):
    model = Formula
    template_name = 'main/index_8.html'
    context_object_name = 'formula'

@login_required
def personal_area(request):
    post = Post.objects.filter(author=request.user.username).order_by('-date')
    # formula = Formula.objects.order_by()
    formula = Formula.objects.filter(users=request.user)
    return render(request, 'main/index_2.html', {'formula':formula, 'post': post})

def forum(request):
    return render(request, 'main/index_4.html')

