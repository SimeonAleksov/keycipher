<template>
  <router-link
    :to="to"
    class="font-display font-semibold text-green-600 hover:text-indigo-800 cursor-pointer"
    :class="[sizeClass]"
  >
    {{ this.text }}
  </router-link>

</template>

<script>
export default {
  name: "Link",
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: 'xs'
    }
  },
  data() {
    return {
      sizeClass: `text-${this.size}`,
    }
  }
}
</script>
