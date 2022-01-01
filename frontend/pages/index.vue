<template>
  <div
    class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
  >

    <h1
      class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
    >
      <span class="inline md:block">Your passwords, your secrets</span>

      <span
        class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-green-500 md:inline-block"
      >stored on blockchain</span
      >
    </h1>
    <div class="flex flex-col items-center mt-12 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <a
              href="#_"
              type="button"
              class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-green-600 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Purchase Now
            </a>
          </span>
      <a href="#" class="mt-3 text-sm text-green-900">Learn More</a>
    </div>

  </div>

</template>

<script>
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default {
  transition: {
    name: "intro",
    mode: "out-in"
  },
  name: 'Index',
  components: {
   Nav,
   Footer,
  }
}
</script>

<style scoped>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>

