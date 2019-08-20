<template>
  <el-input
    type="text"
    v-model="currentValue"
    :maxlength="options.maxlength !== '' ? options.maxlength : null"
    :size="size"
    :disabled="isDisabled"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-input>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PIText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    prop: String,
    options: Object
  },
  mixins: [mixins]
}
</script>
