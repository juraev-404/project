from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Formulas(models.Model):
    name = models.CharField('Название', max_length = 250)
    formula = models.TextField('Содержимое')
