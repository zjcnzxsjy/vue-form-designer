<template>
  <el-autocomplete
    type="text"
    v-model="currentValue"
    :size="size"
    :disabled="isDisabled"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-autocomplete>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PIAutocomplete",
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
