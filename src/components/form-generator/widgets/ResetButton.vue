<template>
  <div>
    <el-button
      :disabled="isDisabled"
      :size="size"
      v-bind="options" 
      @click="handleReset"
      :style="style">
      {{label}}
    </el-button>
  </div>
</template>
<script>
import Emitter from 'element-ui/src/mixins/emitter'
export default {
  name: "PIResetButton",
  props: {
    options: Object,
    label: String
  },
  mixins: [Emitter],
  inject: {
    formGenerator: {
      default: ""
    },
    formDesigner: {
      default: ""
    }
  },
  computed: {
    size() {
      return this.options.size || this.formDesigner.formConfigData.size;
    },
    isDisabled() {
      return this.options.disabled || this.formDesigner.formConfigData.disabled
    },
    style() {
      const style = {};
      const width = this.options.width;
      if (typeof width === 'string') {
        if (/^\d+$/.test(width)) {
          style.width = width + "px";
        } else if (width.includes('%')) {
          style.width = width;
        }
      }
      return style;
    }
  },
  methods: {
    handleReset() {
      if (this.formGenerator) {
        this.formGenerator.$refs.formGenerator.resetFields();
        this.dispatch("formGenerator", "reset");
      }
    }
  }
}
</script>
