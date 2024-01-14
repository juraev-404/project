from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import get_user_model



class LoginUserForm(AuthenticationForm):
    username = forms.CharField(label='Логин:', widget=forms.TextInput(attrs={'class': 'form_imput'}))
    password = forms.CharField(label='Пароль:', widget=forms.PasswordInput(attrs={'class': 'form_imput'}))

    class Meta: 
        model = get_user_model
        fields = ['username', 'password']

class RegistrationUserForm(UserCreationForm):
    username = forms.CharField(label='Логин:',  min_length = 4)
    password1 = forms.CharField(label='Пароль:', widget=forms.PasswordInput(), min_length = 8)
    password2 = forms.CharField(label='Повтор пароля:', widget=forms.PasswordInput())

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'password1', 'password2']
        labels = {
            'email': 'E-mail'
        }

    def clean_email(self):
        email = self.cleaned_data['email']
        if get_user_model().objects.filter(email=email).exists():
            raise forms.ValidationError('Такой email уже существуеть')
        return email