from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id','title','timestamp','movie_id','rating','description','user_id']
        depth = 1