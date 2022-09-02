from django.db import models
from authentication.models import User

# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    movie_id = models.CharField(max_length=500)
    rating = models.IntegerField()
    timestamp = models.DateTimeField()
    title = models.CharField(max_length=500)


class Likes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_id = models.CharField(max_length=500)
    value = models.IntegerField()


class Dislikes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_id = models.CharField(max_length=500)
    value = models.IntegerField()

