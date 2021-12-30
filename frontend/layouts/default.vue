<template>
  <div class="flex flex-col h-screen">
    <Nav class=""/>
    <router-view class="mb-auto"></router-view>
    <Footer class=""/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  name: "Layout",
  components: {Nav, Footer}
}
</script>
