<template>
<div :class="options.vertical? 'radio-wrapper':null">
  <el-radio-group
    v-model="currentValue"
    :disabled="isDisabled"
    :size="size"
    v-bind="options">
    <template v-if="options.isButton">
      <el-radio-button
       v-for="(child, index) in children"
      :key="index"
      :disabled ="child.disabled"
      :label="child.value">
      {{child.label}}
    </el-radio-button>
    </template>
    <template v-else>
      <el-radio
        v-for="(child, index) in children"
        :key="index"
        :label="child.value"
        :disabled ="child.disabled"
        :border="options.border"
        v-bind="child">
        {{child.label}}
      </el-radio>
    </template>
  </el-radio-group>
  </div>
</template>
<script>
import mixins from '@/components/form-generator/mixins'

export default {
  name: "PIRadio",
  props: {
    value: [String, Number, Boolean],
    options: Object,
    prop: String,
    children: Array
  },
  mixins: [mixins]
}
</script>
<style lang="scss" scoped>
.radio-wrapper{
  width:100%;
  height:60px;
  overflow: auto;
}
</style>

