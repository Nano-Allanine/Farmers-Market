from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type':'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validate_data):
        user = User.objects.create_user(**validate_data)
        return user
