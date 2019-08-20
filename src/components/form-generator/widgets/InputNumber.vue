<template>
  <el-input-number
    v-model="currentValue"
    :controls-position="options.controlsPosition? 'right' : null"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-input-number>
</template>
<script>
import mixins from '@/components/form-generator/mixins'
import { isEqual } from "lodash"

export default {
  name: "PIInputNumber",
  props: {
    value: {},
    prop: String,
    options: Object
  },
  mixins: [mixins],
  inject: {
    formGenerator: {
      default: ''
    }
  }
}
</script>
