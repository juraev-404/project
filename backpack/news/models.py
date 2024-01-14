from django.db import models

class Article(models.Model):
    article = models.CharField('Название статьи', max_lenth=250)
    content = models.TextField('Содержимое')
    image = models.ImageField(upload_to = 'main/images')
    date = models.DateTimeField('Дата')
    def __str__(self):
        return self.article