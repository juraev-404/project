from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('login', views.LoginUser.as_view(), name = 'login'),
    path('profile', views.user, name = 'profile'),
    path('logout', views.logout_user, name = 'logout'),
    path('register.', views.RegistrationUser.as_view(), name = 'register')
]