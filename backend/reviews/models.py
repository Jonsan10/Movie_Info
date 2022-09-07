from django.db import models
from authentication.models import User

# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    movie_id = models.CharField(max_length=500)
    rating = models.IntegerField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()


# class Likes(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     review_id = models.CharField(max_length=500)  


# class Dislikes(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     review_id = models.CharField(max_length=500)


