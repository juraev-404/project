from .models import Post, Comment
from django.forms import ModelForm, TextInput, Textarea, DateTimeInput
from datetime import datetime
from django.utils import timezone


class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'content', 'author']

        widgets = {
            'name': TextInput(attrs = {
                'placeholder': 'Название',
            }),
            'content': Textarea(attrs = {
                'placeholder': 'Содержимое'
            }),
            # 'date': DateTimeInput(attrs = {
            #     'maxlength': '16',
            #     # 'value': datetime.now(),
            #     'type': 'hidden'
            # }),
            'author': TextInput(attrs = {
                'type': 'hidden'
            })
        }

class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = ['post', 'comment_author', 'comment_text']

        widgets = {
            'comment_text': Textarea(attrs = {
                'placeholder': 'Коментарый',
                'cols': '40',
                'rows': '8'
            }),
            # 'date_add': DateTimeInput(attrs = {
            #     # 'value': datetime.now(),
            #     'type': 'hidden'
            # })
        }