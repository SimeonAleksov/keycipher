<template>
  <div
    class="font-semibold text-gray-600 font-sans"
    :class="[sizeClass]"
  >
    {{ this.text }}
  </div>
</template>

<script>
export default {
  name: "Label",
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'sm'
    }
  },
  data() {
    return {
      sizeClass: `text-${this.size}`,
    }
  }
}
</script>
