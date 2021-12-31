<template>
  <div>
    <OTPInput/>
    <router-view></router-view>
  </div>
</template>

<script>
import OTPInput from "../../components/onboarding/OTPInput";

export default {
  name: "OTPPage",
  components: {
    OTPInput,
  }
}
</script>