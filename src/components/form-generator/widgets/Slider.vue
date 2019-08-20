<template>
  <el-slider
    v-model="currentValue"
    v-bind="options"
    :style="style">
  </el-slider>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PISlider",
  props: {
    value: [String, Array, Number],
    options: Object,
    prop: String
  },
  mixins: [mixins],
  data() {
    return {
      currentValue: this.value || 0
    }
  },
  watch: {
    "options.range": {
      deep: true,
      handler(val) {
        if (val) {
          this.currentValue = [];
        } else {
          this.currentValue = 0;
        }
      }
    }
  }
}
</script>
