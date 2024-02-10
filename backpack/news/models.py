from django.db import models

class Post(models.Model):
    name = models.CharField('Название статьи', max_length = 200)
    content = models.TextField('Содержимое')
    date = models.DateTimeField('Дата', auto_now_add = True)
    author = models.CharField('Автор', max_length = 25)
    def __str__(self):
        return self.name

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete = models.CASCADE, related_name = 'post_comment')
    comment_author = models.CharField('Автор', max_length = 25)
    comment_text = models.TextField('Содержимое')
    date_add = models.DateTimeField('Дата', auto_now_add = True)

