from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as DjoserUserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class TokenSerializer(serializers.Serializer):
    token = serializers.IntegerField()


class UserCreateSerializer(DjoserUserCreateSerializer):
    password = serializers.CharField(
        required=True,
        style={
            "input_type": "password",
            "placeholder": "Password"
        },
    )

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    class Meta(DjoserUserCreateSerializer.Meta):
        model = User
        fields = [
            "email",
            "username",
            "first_name",
            "last_name",
            "password",
        ]
