import Emitter from 'element-ui/src/mixins/emitter'
import { isEqual } from "lodash"
export default {
  mixins: [Emitter],
  inject: {
    formGenerator: {
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
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
        if (this.prop && !isEqual(newVal, oldVal)) {
          this.dispatch('formGeneratorItem', 'form.generator.change', [this.prop, newVal]);
        }
      }
    }
  },
  computed: {
    size() {
      return this.options.size? this.options.size : null;
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