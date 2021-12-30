<template>
  <div>
    <div class="mt-20 lg:flex justify-center">
      <div class="lg:w-1/2 xl:max-w-screen-sm shadow-lg rounded-lg">
        <h1 class="mt-6 text-xl font-mono font-semibold text-center text-emerald-700">Reset your password</h1>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <div class="mt-12">
            <form>
              <div>
                <Label text="E-mail address" />
                <InputField type="email" placeholder="user@example.com" />
              </div>
              <div class="mt-12 mb-12">
                <Button name="Reset" color="emerald"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../shared/InputField";
import Label from "../shared/Label";
import Link from "../shared/Link";
import Button from "../shared/Button";

export default {
  name: "PasswordReset",
  components: {Button, Link, Label, InputField}
}
</script>

<style scoped>

</style>
