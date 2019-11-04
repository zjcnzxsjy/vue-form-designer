<template>
  <el-select
    v-model="currentValue"
    :disabled="isDisabled"
    :size="size"
    v-bind="options"
    :style="style">
    <el-option
      v-for="child in children"
      :key="child.uuid"
      :value="child.value"
      :label="child.label"
      :disabled="child.disabled">
    </el-option>
  </el-select>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PISelect",
  props: {
    value: [String, Array, Number],
    options: Object,
    prop: String,
    children: Array,
  },
  mixins: [mixins],
  watch: {
    "options.multiple": {
      deep: true,
      handler(val) {
        if (val) {
          this.currentValue = [];
        } else {
          this.currentValue = "";
        }
      }
    }
  }
}
</script>
