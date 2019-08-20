<template>
  <el-date-picker
    v-model="currentValue"
    :disabled="isDisabled"
    :size="size"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-date-picker>
</template>
<script>
import mixins from '@/components/form-generator/mixins'
import { isEqual } from "lodash"

export default {
  name: "PIDatePicker",
  props: {
    value: {},
    prop: String,
    options: Object
  },
  mixins: [mixins]
}
</script>
