<template>
  <div>
    <el-form
      ref="formGenerator"
      :model="model"
      :label-width="schema.config.labelWidth + 'px'"
      v-bind="schema.config">
      <el-row
        v-for="y in yAxias"
        :key="y"
        type="flex"
        justify="start">
        <template v-for="(widget, index) in schema.widgets">
          <el-col
            v-if="widget.span.y === y"
            :key="index"
            :span="widget.span.span"
            :offset="widget.span.offset">
            <form-generator-item
              :key="widget.type + index"
              :widget="widget">
            </form-generator-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import formGeneratorItem from "./Form-generator-item"
export default {
  name: "formGenerator",
  componentName: "formGenerator",
  components: {
    formGeneratorItem
  },
  props: {
    schema: Object,  //表单结构
    model: Object   //表单数据
  },
  data() {
    return {
      valueTypeArray: Object.freeze(["PICheckbox"]),
      yAxias: []    //表单内组件行坐标
    }
  },
  provide() {
    return {
      formGenerator: this
    };
  },
  created() {
    console.log(this.schema)
    console.log(this.model)
    const yAxias = new Set();
    this.schema.widgets && this.schema.widgets.forEach(item => {
      yAxias.add(item.span.y);
      if (item.prop && !(item.prop in this.model)) {
        if (this.valueTypeArray.includes(item.type)) {
          this.$set(this.model, item.prop, item.value!== ""? item.value.split(',') : []);
        } else {
          this.$set(this.model, item.prop, item.value!== undefined? item.value : "");
        }
      }
    })
    this.yAxias = [...yAxias];

    this.$on("search", this.handleSearch);
    this.$on("reset", this.handleReset);
    this.$on("button-click", this.handleClick);
  },
  methods: {
    handleSearch(params) {
      this.$emit("on-search", params);
    },
    handleReset() {
      this.$emit("on-reset");
    },
    handleClick(params) {
      this.$emit("on-button-click", params);
    }
  }
}
</script>
