from rest_framework import views
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from keycipher.users.api import services as otp_services


class TOTPCreateView(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request, format=None):
        try:
            url = otp_services.create_device_topt_for_user(user=request.user)
            return Response(url, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)


class TOTPVerifyView(views.APIView):
    """
   Endpoint to verify/enable a TOTP device
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def post(self, request, format=None):
        try:
            return Response(**otp_services.validate_user_otp(request.user, request.data))
        except Exception as e:
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)
