<template>
<div>
  <div class="mt-20 lg:flex justify-center ">
    <div class="lg:w-1/2 xl:max-w-screen-sm shadow-lg rounded-lg">
      <h1 class="mt-6 text-xl font-mono font-semibold text-center text-emerald-700">Sign in</h1>
      <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <div class="mt-12">
          <form @submit.prevent="login">
            <div>
              <Label text="E-mail address" />
              <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                     type="text"
                     placeholder="Enter your username"
                     v-model="username"
              />
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <Label text="Password" />
                <div>
                    <Link text="Forgot Password?" to="/onboarding/reset-password" size="sm"/>
                </div>
              </div>
              <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                     type="password"
                     placeholder="Enter your password"
                     v-model="password"
              />
            </div>
            <div class="mt-10">
              <Button name="Log In" color="emerald"/>
            </div>
          </form>
          <div class="mt-12 mb-12 text-sm font-display font-semibold text-gray-700 text-center">
            Don't have an account? <Link to="/onboarding/register" text="Register!" size="sm"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from "../shared/Button";
import InputField from "../shared/InputField";
import Link from "../shared/Link";
import Label from "../shared/Label";

export default {
  name: "Login",
  components: {
    Label,
    Link,
    InputField,
    Button
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('onboarding/getToken', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.$router.replace('/onboarding/2fa')
      })
    }
  }
}
</script>
