<template>
  <div>
    <PasswordReset/>
    <router-view></router-view>
  </div>
</template>

<script>
import PasswordReset from "../../components/onboarding/PasswordReset";
export default {
  name: "Password",
  components: {PasswordReset}

}
</script>

<style scoped>

</style>
