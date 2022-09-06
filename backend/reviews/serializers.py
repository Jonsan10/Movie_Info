from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id','likes','dislikes','movie_id','rating','description','user_id']
        depth = 1