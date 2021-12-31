<template>
  <div class="mt-20 lg:flex justify-center">
    <div class="flex flex-col px-20 justify-center shadow-lg rounded-lg">
      <h1 class="mt-6 text-2xl font-sans font-semibold text-emerald-700">
        Scan this QR Code
      </h1>
      <div class="mt-10 flex flex-col items-center">
        <svg class="animate-bounce w-6 h-6 mb-2 fill-zinc-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
          <QRGenerator :value="value"/>
      </div>
      <div class="mt-10">
        <Button name="Continue" color="emerald" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-800 duration-300"/>
      </div>
      <div class="mt-12 mb-10 text-xs italic break-words font-sans text-center font-semibold text-gray-500">
        After scanning the QR code, <br> you'll need to enter it to confirm.
      </div>
    </div>
  </div>
</template>

<script>
import QRGenerator  from "~/components/onboarding/QRGenerator";
import Button from "~/components/shared/Button";

export default {
  name: "OTPActivation",
  components: {
    Button,
    QRGenerator
  },
  data() {
    return {
      value: 'otpauth://totp/simeon?secret=WYZOYKSZX4QHGMKPDA2UOND6CTDDD36X&algorithm=SHA1&digits=6&period=30'
    }
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>