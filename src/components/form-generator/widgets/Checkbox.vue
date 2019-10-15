<template>
  <div class="checkbox-wrapper">
    <div class="el-checkbox-group checkbox-all">
      <el-checkbox
        v-show="options.isShow"
        v-bind="options"
        :size="size"
        :value="checkAll"
        :disabled="isDisabled"
        :indeterminate="indeterminate"
        @click.prevent.native="handleCheckAll">
        全选
      </el-checkbox>
    </div>
    <el-checkbox-group
      v-if="!options.isButton"
      @change="checkAllGroupChange "
      :disabled="isDisabled"
      v-bind="options"
      v-model="currentValue"
      :size="size">
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
.checkbox-wrapper {
  display: flex;
  .checkbox-all {
    margin-right: 15px;
  }
}
</style>
