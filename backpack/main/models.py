from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Formula(models.Model):
    name = models.CharField('Название', max_length = 250)
    formula = models.TextField('Содержимое')
    category = models.CharField('Категория', max_length = 25)
    users = models.ManyToManyField(User, blank=True, related_name='formulas')
    

    def __str__(self):
        return self.name