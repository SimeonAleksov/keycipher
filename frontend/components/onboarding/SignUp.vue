<template>
  <div>
    <div class="mt-6 lg:flex justify-center">
      <div class="lg:w-1/2 xl:max-w-screen-sm shadow-lg rounded-lg">
        <h1 class="mt-6 text-xl font-mono font-semibold text-center text-emerald-700">Register</h1>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <div class="mt-12">
            <form @submit.prevent="register">
              <div>
                <Label text="E-mail address" />
                <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                       type="email"
                       placeholder="john@example.com"
                       v-model="email"
                />
              </div>
              <div class="mt-8">
                <Label text="Username" />
                <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                       type="text"
                       placeholder="johndoe"
                       v-model="username"
                />
              </div>
              <div class="mt-8">
                <Label text="First name" />
                <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                       type="text"
                       placeholder="John"
                       v-model="firstName"
                />
              </div>
              <div class="mt-8">
                <Label text="Last name" />
                <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                       type="text"
                       placeholder="Doe"
                       v-model="lastName"
                />
              </div>
              <div class="mt-8">
                <Label text="Password" />
                <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
                       type="password"
                       placeholder="Enter password"
                       v-model="password"
                />
              </div>
              <div class="mt-8">
                <Label text="Confirm password" />
                <InputField type="password" placeholder="Enter your password again" />
              </div>
              <div class="mt-10">
                <Button name="Sign up" color="emerald"/>
              </div>
            </form>
            <div class="mt-12 mb-10 text-sm font-display font-semibold text-gray-700 text-center">
              Already have an account? <Link to="/onboarding/login" text="Sign in!" size="sm"/>
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
  name: "SignUp",
  components: {Label, Link, InputField, Button},
  data () {
    return {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
    }
  },
  methods: {
    async register() {
      await this.$store.dispatch('onboarding/register', {
        email: this.email,
        first_name: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password
      })
      .then((response) => {
        this.$router.push({ path: '/onboarding/otp'})
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
