from django.db import models
from django.db import models
from django.contrib.auth.models import User
from formulas.models import Formulas

# Create your models here.
class UserFormula(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    formula = models.ForeignKey(Formulas, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'formula')