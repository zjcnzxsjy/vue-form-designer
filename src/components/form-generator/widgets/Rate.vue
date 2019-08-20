<template>
  <el-rate
    v-model="currentValue"
    v-bind="options"
    :style="style">
  </el-rate>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PIRate",
  props: {
    value: [String, Number],
    options: Object,
    prop: String
  },
  mixins: [mixins],
  inject: {
    formGenerator: {
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value || 0
    }
  }
}
</script>
