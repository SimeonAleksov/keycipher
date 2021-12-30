<template>
  <div>
    <SignUp />
    <router-view></router-view>
  </div>
</template>
<script>
import SignUp from "../../components/onboarding/SignUp";
export default {
  name: "RegisterView",
  components: {SignUp}
}
</script>

<style scoped>

</style>
