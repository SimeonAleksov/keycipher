<template>
  <div>
    <Login/>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "../../components/onboarding/Login";
import OTPInput from "../../components/onboarding/OTPInput";
import { mapGetters } from 'vuex'


export default {
  transition: 'fade',
  name: "LoginView",
  components: {
    OTPInput,
    Login
  },
  computed: {
    ...mapGetters({
      proceedTo2fa: 'onboarding/get2fa',
    }),
  },
  mounted() {
  }
}
</script>
