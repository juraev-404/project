from django.shortcuts import render
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from .forms import LoginUserForm, RegistrationUserForm
from django.http import HttpResponseRedirect
from django.urls import reverse, reverse_lazy
from django.views.generic import CreateView
from django.views.generic.edit import FormMixin



def user(request):
    return render(request, 'main/index_3.html')
    pass

class LoginUser(LoginView):
    form_class = LoginUserForm
    template_name = 'main/index_3.html'
    def get_success_url(self):
        return reverse_lazy('personal_area')

def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse('home'))

class RegistrationUser(CreateView, FormMixin):
    form_class = RegistrationUserForm
    template_name = 'main/index_5.html'
    success_url = reverse_lazy('personal_area')

    def form_valid(self, form):
        response = super().form_valid(form)
        username = form.cleaned_data['username']
        password = form.cleaned_data['password1']
        user = authenticate(username=username, password=password)
        login(self.request, user)
        return response
    def get_success_url(self):
        return self.success_url
    
