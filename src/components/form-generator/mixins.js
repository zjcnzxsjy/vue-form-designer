import Emitter from 'element-ui/src/mixins/emitter'
import { isEqual } from "lodash-es"
export default {
  mixins: [Emitter],
  data() {
    return {
      currentValue: this.value
    }
  },
  inject: {
    formDesigner: {
      default: ""
    }
  },
  watch: {
    value(val) {
      if (!isEqual(this.currentValue, val)) {
        this.currentValue = val;
      }
    },
    currentValue: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
        if (this.prop && !isEqual(newVal, oldVal)) {
          //预览时不触发回调
          if (!this.formDesigner.showPreviewForm) {
            this.dispatch('formDesigner', 'form.model.change', [this.prop, newVal]);
          } else {
            this.dispatch('formGeneratorItem', 'form.generator.change', [this.prop, newVal]);
          }
        }
      }
    }
  },
  computed: {
    size() {
      return this.options.size || this.formDesigner.formConfigData.size || null;
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
  }
}