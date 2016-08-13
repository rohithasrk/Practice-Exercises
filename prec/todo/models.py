from django.db import models

# Create your models here.
class TodoData(models.Model):
   title = models.CharField(max_length=30)
   data = models.CharField(max_length=200)
   deadline = models.DateField()
   completed = False
