from django.db import models

# Create your models here.

class Formula(models.Model):
    name = models.CharField('Название', max_length = 250)
    formula = models.TextField('Содержимое')
    category = models.CharField('Категория', max_length = 25)

    def __str__(self):
        return self.name