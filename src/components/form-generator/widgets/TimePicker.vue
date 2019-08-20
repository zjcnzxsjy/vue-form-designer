<template>
  <el-time-picker
    v-model="currentValue"
    :picker-options="pickerOptions"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-time-picker>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PITimePicker",
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
  },
  computed: {
    pickerOptions() {
      const ret = {};
      if (this.options.selectableRange) {
        ret.selectableRange = this.options.selectableRange.join(" - ");
      }
      if (this.options.format) {
        ret.format = this.options.format;
      }
      return ret;
    }
  },
  watch: {
    "options.isRange": {
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
