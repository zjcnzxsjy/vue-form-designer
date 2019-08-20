<template>
  <el-input
    type="textarea"
    v-model="currentValue"
    :maxlength="options.maxlength !== '' ? options.maxlength : null"
    :disabled="isDisabled"
    :size="size"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-input>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PITextarea",
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
