<template>
  <div>
    <Login v-show="!proceedTo2fa"/>
    <OTPInput v-show="proceedTo2fa" />
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "../../components/onboarding/Login";
import OTPInput from "../../components/onboarding/OTPInput";

export default {
  name: "LoginView",
  components: {
    OTPInput,
    Login
  },
  computed: {
    proceedTo2fa() {
      return this.$store.state.isValidLogin;
    }
  }
}
</script>
