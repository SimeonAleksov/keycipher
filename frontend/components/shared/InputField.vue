<template>
  <input class="block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans"
         :class="[widthClass]"
         :type="this.type"
         :placeholder="this.placeholder"
         @input="onInput"
         v-model="dataModel"
  >
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: 'full'
    },
    onInput: {
      type: Function,
      required: false,
    },
    model: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      widthClass: `w-${this.width}`,
      dataModel: this.model,
    }
  }
}
</script>
