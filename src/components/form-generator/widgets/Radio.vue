<template>
<div :class="options.vertical? 'radio-wrapper':null">
  <el-radio-group
    v-model="currentValue"
    :type="options.type ? 'button' : null"
    :disabled="isDisabled"
    :size="size"
    v-bind="options">
    <el-radio
      v-for="(child, index) in children"
      :key="index"
      :disabled ="child.disabled"
      :border="options.border"
      v-bind="child">
    </el-radio>
  </el-radio-group>
  </div>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PIRadio",
  props: {
    value: String,
    options: Object,
    prop: String,
    children: Array
  },
  mixins: [mixins],
  data(){
     return {
       currentValue:""
     }
  }
}
</script>
<style lang="scss" scoped>
.radio-wrapper{
  width:100%;
  height:60px;
  overflow: auto;
}
</style>

