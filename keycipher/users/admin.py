from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _


User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    filter_horizontal = [
        "groups",
        "user_permissions",
    ]
    fieldsets = (
        (
            _("User info"),
            {
                "fields": (
                    "username",
                    "first_name",
                    "last_name",
                    "password",
                )
            },
        ),
        (_("Personal info"), {"fields": ("email",)}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    list_display = ["username", "first_name"]
    search_fields = ["name"]
