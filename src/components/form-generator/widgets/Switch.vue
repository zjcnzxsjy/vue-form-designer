<template>
  <el-switch
    v-model="currentValue"
    v-bind="options"
    :style="style">
  </el-switch>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PISwitch",
  props: {
    value: [String, Boolean],
    options: Object,
    prop: String
  },
  mixins: [mixins],
  data() {
    return {
      currentValue: this.value
    }
  }
}
</script>
