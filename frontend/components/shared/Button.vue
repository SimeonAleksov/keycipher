<template>
  <button
    class="text-gray-100
    p-4
    rounded-full
    tracking-wide
    font-semibold
    font-display
    focus:outline-none
    focus:shadow-outline
    shadow-lg
    font-sans
    bg-emerald-500
    hover:bg-emerald-600
"
    :class="[colorClass, hoverClass, widthClass]"
    :type="type"
    @click="onClick"
  >
    {{ this.name }}
  </button>
</template>

<script>
import colorMapping from '../../constants/colors'

export default {
  name: "Button",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'emerald',
    },
    width: {
      type: String,
      required: false,
      default: 'full',
    },
    type: {
      type: String,
      required: false,
      default: 'submit',
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    }
  },
  data() {
    return {
      colorClass: colorMapping.primary[this.color],
      hoverClass: colorMapping.hover[this.color],
      widthClass: `w-${this.width}`,
    }
  },
}
</script>
