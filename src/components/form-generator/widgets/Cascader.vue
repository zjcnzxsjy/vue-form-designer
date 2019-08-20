<template>
  <el-cascader
    v-model="currentValue"
    :options="children"
    :size="size"
    :disabled="isDisabled"
    v-bind="options"
    :style="style">
  </el-cascader>
</template>
<script>
import mixins from "@/components/form-generator/mixins"

export default {
  name: "PICascader",
  props: {
    value: [String, Array],
    options: Object,
    prop: String,
    children: {
      type: Array,
      default: () => []
    }
  },
  mixins: [mixins]
}
</script>
