<template>
  <div>
    <div class="mt-6 lg:flex justify-center">
      <div class="lg:w-1/2 xl:max-w-screen-sm shadow-lg rounded-lg">
        <h1 class="mt-6 text-xl font-mono font-semibold text-center text-emerald-700">Register</h1>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <div class="mt-12">
            <form>
              <div>
                <Label text="E-mail address" />
                <InputField type="email" placeholder="user@example.com" />
              </div>
              <div class="mt-8">
                <Label text="Full name" />
                <InputField type="username" placeholder="John Doe" />
              </div>
              <div class="mt-8">
                <Label text="Password" />
                <InputField type="password" placeholder="Enter your password" />
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
  components: {Label, Link, InputField, Button}
}
</script>
