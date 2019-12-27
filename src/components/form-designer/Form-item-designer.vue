<template>
  <div class="grid-item-inner-wrapper" 
    :class="{
      'grid-item-label-left' : formConfigData.labelPosition === 'left',
      'grid-item-label-right' : formConfigData.labelPosition === 'right',
      'grid-item-label-top' : (formConfigData.labelPosition === 'top' && !showGridButtonItems.includes(config.type)) || !formConfigData.labelWidth,
      'is-required': !formConfigData.hideRequiredAsterisk && config.required
    }">
    <div class="icon-wrapper">
      <el-tooltip content="复制">
        <svg-icon icon-class="copy" class-name="small-icon small-icon-copy" @click.stop="handleCopy"></svg-icon>
      </el-tooltip>
      <el-tooltip content="删除">
        <svg-icon icon-class="remove" class-name="small-icon small-icon-remove" @click.stop="handleRemove"></svg-icon>
      </el-tooltip>
    </div>
    <label class="grid-item_label" 
      v-if="!showGridButtonItems.includes(config.type)" 
      :style="labelStyle">{{label}}
    </label>
    <div class="grid-item_content" v-if="remoteDataSource.includes(config.type)" :style="contentStyle">
      <component 
        :is="type" 
        :options="options"
        :prop="config.prop"
        :children="config.children.length > 0? config.children : null">
      </component>
    </div>
    <div class="grid-item_button" v-else-if="showGridButtonItems.includes(config.type)">
      <component 
        :is="type" 
        :options="options"
        :prop="config.prop"
        :label="options.label">
      </component>
    </div>
    <div class="grid-item_content" v-else>
      <component 
        :is="type" 
        :prop="config.prop"
        :options="options">
      </component>
    </div>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash-es'
import {registerModules} from '@/utils/Register';
import svgIcon from "@/components/svg-icon/SvgIcon"

let modules = require.context('../form-generator/widgets', false, /\.vue$/);
modules = Object.assign({}, registerModules(modules));

const formComponents = {};
for(let key in modules) {
  formComponents[modules[key].name] = modules[key];
}
export default {
  name: "formItemDesigner",
  componentName: "formItemDesigner",
  components: {
    ...formComponents,
    svgIcon
  },
  props: {
    i: [String, Number],
    type: String,
    label: String,
    labelWidth: [Number, String],
    formConfigData: Object,
    config: Object
  },
  watch: {
    "config": {
      deep: true,
      handler(val) {
        console.log(val)
      }
    }
  },
  computed: {
    labelStyle() {
      const ret = {};
      if (this.formConfigData.labelPosition === 'top') return ret;
      const labelWidth = this.labelWidth || this.formConfigData.labelWidth;
      if (labelWidth) {
        ret.width = `${labelWidth}px`;
      }
      return ret;
    },
    contentStyle() {
      const ret = {};
      const label = this.label;
      if (this.formConfigData.labelPosition === 'top') return ret;
      if (!label && !this.labelWidth && !this.formConfigData.labelWidth) return ret;
      const labelWidth = this.labelWidth || this.formConfigData.labelWidth;
      ret.marginLeft = `${labelWidth}px`;
      return ret;
    },
    options() {
      const ret = {};
      Object.keys(this.config.options).map(key => {
        ret[key] = this.config.options[key].value;
      })
      return ret;
    }
  }, 
  data() {
    return {
      showGridButtonItems: Object.freeze(["PISearchButton", "PIResetButton", "PICustomButton"]),
      remoteDataSource: Object.freeze(["PISelect", "PICheckbox", "PIRadio", "PICascader"])
    }
  },
  created() {
    this.getChildren();
  },
  methods: {
    handleCopy() {
      this.$emit("copy-widget", cloneDeep(this.config));
    },
    handleRemove() {
      this.$emit("remove-widget", this.i, cloneDeep(this.config));
    },
    getChildren() {
      if (this.remoteDataSource.includes(this.config.type) && this.config.children.length === 0 && this.config.dataSource) {
        if (this.config.dataSourceType === "static") {
          this.config.children = JSON.parse(this.config.dataSource);
        } else if (this.config.dataSourceType === "api") {
          this.$http.get(this.config.dataSource)
          .then(res => {
            this.config.children = res.data.result_data;
          });
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.grid-item-inner-wrapper {
  height: 100%;
  position: relative;
  user-select: none;
  &:before {
    display: table;
    content: "";
    height: 29px;
  }
  &:after {
    display: table;
    content: "";
    clear: both;
  }
  .grid-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #495060;
    line-height: 32px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
  }
  .grid-item_content {
    min-height: 32px;
    display: flex;
    align-items: center;
  }
  .icon-wrapper {
    position: absolute;
    right: 0;
    top: 5px;
    display: none;
    .small-icon {
      width: 12px;
      height: 12px;
      cursor: pointer;
      & + .small-icon {
        margin-left: 4px;
      }
    }
    .small-icon-copy {
      color: #409EFF;
    }
    .small-icon-remove {
      color: #F56C6C;
    }
  }
  &:hover .icon-wrapper{
    display: block;
  }
  .grid-item_button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.grid-item-label-left {
  .grid-item_label {
    text-align: left;
  }
}
.grid-item-label-right {
  .grid-item_label {
    text-align: right;
  }
}
.is-required .grid-item_label:before {
  content: '*';
  display: inline-block;
  margin-right: 4px;
  color: #F56C6C;
}
.grid-item-label-top {
  &:before {
    display: table;
    content: "";
    height: 5px;
  }
  &:after {
    display: table;
    content: "";
    clear: both;
  }
  .grid-item_label {
    float: none;
    display: inline-block;
    padding: 0 0 5px 0;
  }
}
</style>
