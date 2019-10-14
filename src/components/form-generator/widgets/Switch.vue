<template>
  <el-switch
    v-model="currentValue"
    :disabled="isDisabled"
    :size="size"
    v-bind="options"
    :style="style">
  </el-switch>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PISwitch",
  props: {
    value: {
      type: [String, Boolean],
      default: false
    },
    options: Object,
    prop: String
  },
  mixins: [mixins],
  data() {
    return {
      currentValue: this.value || false
    }
  }
}
</script>
