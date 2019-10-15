<template>
  <el-time-select
    v-model="currentValue"
    :picker-options="pickerOptions"
    :disabled="isDisabled"
    :size="size"
    v-bind="options"
    v-on="$listeners"
    :style="style">
  </el-time-select>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PITimeSelect",
  props: {
    value: {},
    prop: String,
    options: Object
  },
  mixins: [mixins],
  computed: {
    pickerOptions() {
      console.log(this.options)
      const ret = {
        start: this.options.start,
        end: this.options.end,
        step: this.options.step,
        minTime: this.options.minTime
      };
      if (this.options.maxTime) {
        ret.maxTime = this.options.maxTime;
      }
      return ret;
    }
  }
}
</script>
