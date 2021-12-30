<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      size: 200,
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>
