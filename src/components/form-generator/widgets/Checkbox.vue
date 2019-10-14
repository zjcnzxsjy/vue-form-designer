<template>
  <div class="checkbox-wrapper"
    :class=" !options.vertical ?  'checkbox-horizontal':'checkbox-vertical'">
    <el-checkbox
      class="checkAll"
      v-show="options.isShow"
      v-bind="options"
      :size="size"
      :value="checkAll"
      :disabled="isDisabled"
      :indeterminate="indeterminate"
      @click.prevent.native="handleCheckAll"
      :class=" !options.vertical || options.isButton ?  'checkAll-horizontal' : null">
      全选
    </el-checkbox>
    <div class="checkboxGroup">
      <el-checkbox-group
        v-if="!options.isButton"
        @change="checkAllGroupChange "
        :disabled="isDisabled"
        v-bind="options"
        v-model="currentValue"
        :size="size"
        :class=" options.vertical && options.isShow ?  'checkboxGroup-vertical':null">
        <el-checkbox
          v-for="(child, index) in children"
          :key="index"
          :border="options.border"
          :label="child.value"
          v-bind="child">
          <span>{{child.label}}</span>
        </el-checkbox>
      </el-checkbox-group>

      <el-checkbox-group
        v-else
        v-model="currentValue"
        @change="checkAllGroupChange"
        v-bind="options"
        :size="size"
        class="checkboxGroup">
        <el-checkbox-button
          v-for="(child, index) in children"
          :key="index"
          :label="child.value"
          v-bind="child">
          <span>{{child.label}}</span>
        </el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import mixins from "@/components/form-generator/mixins";

export default {
  name: "PICheckbox",
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: Object,
    prop: String,
    children: Array
  },
  mixins: [mixins],
  inject: {
    formGenerator: {
      default: ""
    }
  },
  data() {
    return {
      checkAll: false,
      indeterminate: false
    };
  },
  methods: {
    checkAllGroupChange(data) {
      if (this.options.indeterminate) {
        if (data.length === this.children.length) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0 && data.length < this.children.length) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      } else {
        if (data.length === this.children.length) {
          this.checkAll = true;
        } else if (data.length > 0 && data.length < this.children.length) {
          this.checkAll = false;
        } else {
          this.checkAll = false;
        }
      }
    },
    handleCheckAll() {
      if (this.options.indeterminate) {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      if (this.checkAll) {
        this.currentValue = Object.keys(this.children).map(
          key => this.children[key].label
        );
      } else {
        this.currentValue = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-horizontal{
  display: flex;
}
.checkbox-vertical{
  height:60px;
  overflow: auto;
}
.checkbox-wrapper {
  width: 100%;
  align-items: center;
  .checkboxGroup {
    display: flex;
    align-items: center;
  }
  .checkAll {
    text-align: right;
    vertical-align: middle;
    color: #495060;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    width: 60px;
    display: inline-block;
  }
  .checkAll-horizontal{
    float: left;
  }
}
</style>
