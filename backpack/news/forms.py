from .models import Article
from django.forms import ModelForm, TextInput, Textarea, DateTimeInput

class ArticleForm(ModelsForm):
    class Meta:
        model = Article
        fields = ['article', 'content', 'date']

        widgets = {
            'article': TextInput(attrs = {
                'placeholder': 'Название'
            }),
            'conten': Textarea(attrs = {
                'placeholder': ''
            })
        }