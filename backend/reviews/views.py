from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Review
from .serializers import ReviewSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_reviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def make_review(request):
    print(
        'User', f"{request.user.id} {request.user.email} {request.user.username}")
    