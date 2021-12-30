from rest_framework import views
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from django_otp import devices_for_user
from django_otp.plugins.otp_totp.models import TOTPDevice
from keycipher.users.api import serializers as otp_serializers


def get_user_totp_device(self, user, confirmed=None):
    devices = devices_for_user(user, confirmed=confirmed)
    for device in devices:
        if isinstance(device, TOTPDevice):
            return device


class TOTPCreateView(views.APIView):
    """
    Endpoint to set up a new TOTP device
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        device = get_user_totp_device(self, user)
        if not device:
            device = user.totpdevice_set.create(confirmed=False)
        url = device.config_url
        return Response(url, status=status.HTTP_201_CREATED)


class TOTPVerifyView(views.APIView):
    """
   Endpoint to verify/enable a TOTP device
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        device = get_user_totp_device(self, user)
        serializer = otp_serializers.TokenSerializer(data=request.data)
        if device is None:
            return Response(data="No device registered.", status=status.HTTP_406_NOT_ACCEPTABLE)
        if not serializer.is_valid():
            return Response(data="Invalid data", status=status.HTTP_400_BAD_REQUEST)
        if device.verify_token(serializer.data.get('token')):
            if not device.confirmed:
                device.confirmed = True
                device.save()
            return Response(True, status=status.HTTP_201_CREATED)
        else:
            return Response(data="Wrong OTP code.", status=status.HTTP_406_NOT_ACCEPTABLE)