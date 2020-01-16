<template>
  <div class="form-edit">
    <div class="edit-header">
      <ul class="components-menu">
        <li v-for="(menu, index) in componentMenus" 
          class="component-group"
          :key="index"
          :title="menu.label">
          <template v-if="menu.children">
            <el-dropdown 
              placement="bottom">
              <span>
                <svg-icon 
                  :icon-class="menu.iconClass" 
                  class-name="component-icon"
                  :title="menu.label"
                  @click="handleComponentClick(menu.widget)">
                </svg-icon>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="subMenu in menu.children"
                  :key="subMenu.iconClass" 
                  :title="subMenu.label">
                  <svg-icon 
                    :icon-class="subMenu.iconClass" 
                    class-name="component-icon"
                    @click="handleComponentClick(subMenu.widget)">
                  </svg-icon>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <svg-icon  
              :icon-class="menu.iconClass" 
              class-name="component-icon"
              @click="handleComponentClick(menu.widget)">
            </svg-icon>
          </template>
        </li>
      </ul>
      <div class="header-others">
        <div class="others-tab icon-width">
          <el-tooltip content="清空">
            <svg-icon icon-class="clear" @click="handleClear"></svg-icon>
          </el-tooltip>
        </div>
        <div class="others-tab icon-width">
          <el-tooltip content="导入JSON">
            <svg-icon icon-class="imp_JSON"></svg-icon>
          </el-tooltip>
        </div>
        <div class="others-tab icon-width">
          <el-tooltip content="生成JSON">
            <svg-icon icon-class="g_JSON" @click="handleGenerateJSON"></svg-icon>
          </el-tooltip>
        </div>
        <div class="others-tab icon-width">
          <el-tooltip content="预览">
            <svg-icon icon-class="preview_form" @click="handlePreviewForm"></svg-icon>
          </el-tooltip>
        </div>
        <div class="others-tab icon-width">
          <el-tooltip content="保存">
            <svg-icon icon-class="save" @click="handleSaveForm"></svg-icon>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="edit-main">
      <!-- <div class="left-edit-main"></div> -->
      <div class="right-edit-main" @click="handleWidgetClick('form', formId)">
        <grid-layout
            ref="gridLayout"
            :layout.sync="layout"
            :col-num="24"
            :row-height="40"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :autoSize="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true">
          <grid-item 
            v-for="(item, index) in layout"
            ref="gridItem"
            :key="index"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :minH="2"
            :maxH="2"
            @click.native.stop="handleWidgetClick(item.widget.type, item.i)"
            @resize="handleGridItemResize"
            :style="{
              zIndex: currentIndex === item.i? 99 : null
            }"         
            :class="{
              'active': currentIndex === item.i
            }">
            <div 
              class="grid-item-inner">
              <form-item-designer
                :i="item.i"
                :type="item.widget.type"
                :label="item.widget.label"
                :label-width="item.widget.labelWidth"
                :label-position="item.widget.labelPosition"
                :formConfigData="formConfigData"
                :config="item.widget"
                @copy-widget="handleCopyWidget"
                @remove-widget="handleRemoveWidget">
              </form-item-designer>
            </div>
          </grid-item>
        </grid-layout>
      </div>
      <div class="config-manager-container">
        <keep-alive>
          <form-config v-if="currentIndex === formId" :data="formConfigData"></form-config>
          <form-item-config 
            v-else 
            :data="configData"
            :remoteMethod="remoteMethod">
          </form-item-config>
        </keep-alive>
      </div>
    </div>
    <el-dialog
      :visible.sync="showPreviewForm"
      title="预览"
      :close-on-click-modal="false"
      :fullscreen="true">
      <form-generator 
        v-if="showPreviewForm"
        :schema="schema" 
        :model="model">
      </form-generator>
    </el-dialog>
    <el-dialog
      title="生成的JSON"
      :visible.sync="showJSON"
      :close-on-click-modal="false"
      width='800'>
      <!-- <vue-ace-editor v-if="showJSON" :value="schemaString" lang="json" theme="xcode" :readOnly="true" style="height:300px;"></!-->
      <MonacoEditor
        v-if="showJSON"
        language="json"
        height="300"
        theme="vs-dark"
        v-model="schemaString">
      </MonacoEditor>
      <div slot="footer">
        <el-button type="primary" icon="ios-copy-outline" v-clipboard:copy="schemaString" v-clipboard:success="handleCopy">复制</el-button>
        <el-button type="ghost" @click="handleClose('showJSON')">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import { basicComponents } from "./config"
import { cloneDeep, has } from 'lodash-es'
import formConfig from './Form-config';
import formItemConfig from './Form-item-config';
import formItemDesigner from './Form-item-designer';
import { on, off } from "element-ui/src/utils/dom";
import formGenerator from "@/components/form-generator/Form-generator"
import { config2Schema } from "./util"
// import vueAceEditor from "@/components/vue-ace-editor/Vue-ace-editor"
import clipboard from '@/directives/clipboard/index.js' // use clipboard by v-directive
import uuidv1 from "uuid/v1"
import svgIcon from "@/components/svg-icon/SvgIcon"
import MonacoEditor from "@/components/vue-monaco-editor"

export default {
  name: "formDesigner",
  componentName: 'formDesigner',
  components: {
    gridLayout: VueGridLayout.GridLayout,
    gridItem: VueGridLayout.GridItem,
    formConfig,
    formItemConfig,
    formItemDesigner,
    formGenerator,
    // vueAceEditor,
    svgIcon,
    MonacoEditor
  },
  directives: {
    clipboard
  },
  props: {
    data: Object,
    remoteMethod: Function
  },
  provide() {
    return {
      "formDesigner": this
    }
  },
  data() {
    return {
      componentMenus: Object.freeze([
        {
          label: "单行文本",
          iconClass: "text",
          widget: "text",
          children: [
            {
              label: "带建议文本",
              iconClass: "text",
              widget: "autocomplete"
            },
            {
              label: "多行文本",
              iconClass: "textarea",
              widget: "textarea"
            },
            {
              label: "计数器",
              iconClass: "input_number",
              widget: "inputNumber"
            },
          ]
        },
        {
          label: "下拉框",
          iconClass: "select",
          widget: "select",
        },
        {
          label: "单选框",
          iconClass: "radio",
          widget:"radio"
        },
        {
          label: "多选框",
          iconClass: "checkbox",
          widget:"checkbox"
        },
        {
          label: "时间选择器(picker)",
          iconClass: "time_picker",
          widget: "timePicker",
          children: [
            {
              label: "日期选择器(select)",
              iconClass: "time_picker",
              widget: "timeSelect"
            },
            {
              label: "日期选择器",
              iconClass: "date_picker",
              widget: "datePicker"
            }
          ]
        },
        {
          label: "评分",
          iconClass: "rate",
          widget: "rate"
        },
        {
          label: "级联",
          iconClass: "cascader",
          widget: "cascader"
        },
        {
          label: "开关",
          iconClass: "switch",
          widget: "switch"
        },
        {
          label: "滑块",
          iconClass: "slider",
          widget: "slider"
        },
        {
          label: "查询",
          iconClass: "search_btn",
          widget: "searchBtn",
          children: [
            {
              label: "重置",
              iconClass: "reset_btn",
              widget: "resetBtn"
            },
            {
              label: "自定义",
              iconClass: "custom_btn",
              widget: "customBtn"
            }
          ]
        },
      ]),
      formConfigData: (this.data || {}).formConfigData || basicComponents.form,
      configData: (this.data || {}).formConfigData || basicComponents.form,
      layout: (this.data || {}).layout || [],
      formId: "",
      currentIndex: "",    //当前选中grid-item的index
      showPreviewForm: false,
      schema: {},
      model: {},
      showJSON: false,
      schemaString: "",
      designerModel: {}  //设计器表单model
    }
  },
  watch: {
    configData: {
      deep: true,
      handler(val) {
        console.log(this.currentIndex)
        const findIndex = this.layout.findIndex(item => item.i === this.currentIndex);
        if (findIndex !== -1) {
          this.layout[findIndex].widget = val;
          // this.layout[findIndex].w = this.setGridw(val);
          this.layout[findIndex].w = val.span.span;
          this.$refs.gridLayout.layoutUpdate();
        }
      }
    }
  },
  created() {
    console.log(this.data)
    if (has(this.data, "formConfigData") && !isEmpty(this.data.formConfigData)) {
      this.formId = this.data.formConfigData.uid;
      this.currentIndex = this.data.formConfigData.uid;
    } else {
      this.formId = uuidv1().replace(/\-/g, "");
      this.currentIndex = this.formId;
      this.formConfigData.uid = this.formId;
    }
  },
  mounted() {
    on(window, "resize", this.setGridlayoutW);
    //监听默认值的改变
    this.$on("form.model.change", this.formModelChange);
  },
  methods: {
    handleComponentClick(widget) {
      const length = this.layout.length;
      this.configData = cloneDeep(basicComponents[widget]);
      const unique = uuidv1().replace(/\-/g, "");
      this.configData.uid = unique;
      this.currentIndex = unique;
      this.layout.push(
        {
          // "x": 0,"y": 2 * length,"w": this.setGridw(this.configData),"h":2,"i": unique, widget: this.configData
          "x": 0,"y": 2 * length,"w": this.configData.span.span,"h":2,"i": unique, widget: this.configData
        }
      )
    },
    handleWidgetClick(type, i) {
      this.currentIndex = i;
      if (type !== "form") {
        this.configData = this.layout.filter(item => item.i === i)[0].widget;
      } else {
        this.configData = this.formConfigData;
      }
    },
    setGridw(data) {
      let documentWidth = this.getDocumnetWidth();
      if (documentWidth < 768) {
        return data.span.sx;
      } else if (documentWidth >= 768 && documentWidth < 992) {
        return data.span.sm;
      } else if (documentWidth >= 992 && documentWidth < 1200) {
        return data.span.md;
      } else {
        return data.span.lg;
      }
    },
    setGridlayoutW() {
      this.layout.forEach(item => {
        // item.w = this.setGridw(item.widget);
        item.w = item.widget.span.span;
      })
    },
    getDocumnetWidth() {
      const body = document.body;
      const html = document.documentElement;
      let documentWidth = Math.max(
        body.offsetWidth,
        body.scrollWidth,
        html.clientWidth,
        html.offsetWidth,
        html.scrollWidth
      );
      return documentWidth;
    },
    handleCopyWidget(configData) {
      const length = this.layout.length;
      const unique = uuidv1().replace(/\-/g, "");
      this.layout.push(
        {
          // "x": 0,"y": 2 * length,"w":this.setGridw(configData),"h":2,"i": length, widget: configData
          "x": 0,"y": 2 * length,"w":configData.span.span,"h":2,"i": unique, widget: configData
        }
      )
      this.currentIndex = unique;
    },
    handleRemoveWidget(i) {
      const findIndex = this.layout.findIndex(item => item.i === i);
      const prop = this.layout[findIndex].prop;
      if (prop in this.model) {
        this.$delete(this.model, prop);
      }
      this.layout.splice(findIndex, 1);
      this.currentIndex = this.formId;;
    },
    handleGenerateJSON() {
      this.schemaString = JSON.stringify(config2Schema(this.layout, this.formConfigData), null, 2);
      this.showJSON = true;
    },
    handlePreviewForm() {
      this.schema = config2Schema(this.layout, this.formConfigData);
      console.log(this.schema)
      this.model = cloneDeep(this.designerModel);
      this.showPreviewForm = true;
    },
    handleClose(visible) {
      this[visible] = false;
    },
    handleCopy() {
      this.$message.success("Copy successfully");
    },
    handleClear() {
      this.layout = [];
      this.currentIndex = this.formId;
    },
    handleSaveForm() {
      //this.schema = config2Schema(this.layout, this.formConfigData);
      this.$emit("save-form", {
        formConfigData: this.formConfigData,
        layout: this.layout
      });
    },
    handleGridItemResize(i, newH, newW, newHPx, newWPx) {
      this.currentIndex = i;
      this.configData = this.layout.filter(item => item.i === i)[0].widget;
      this.configData.span.span = newW;
    },
    formModelChange(prop, value) {
      if (prop in this.designerModel) {
        this.designerModel[prop] = value;
      } else {
        this.$set(this.designerModel, prop, value);
      }
    },
  },
  destroyed() {
    off(window, "resize", this.setGridlayoutW);
  }
}
</script>

<style lang="scss" scoped>
.form-edit {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .edit-header {
    display: flex;
    height: 40px;
    z-index: 100;
    background: #222528;
    .components-menu {
      margin: 0;
      padding: 0;
      display: inline-flex;
      list-style: none;
      padding-left: 0;
      position: relative;
      margin-right: 10px;
      .component-group {
        cursor: pointer;
        height: 40px;
        width: 56px;
        color: #bcc9d4;
        margin-right: 10px;
        line-height: 35px;
        text-align: center;
        border-top: 2px solid transparent;     
      }
    }
    .header-others {
      display: flex;
      align-items: center;
      position: absolute;
      height: 40px;
      right: 0;
      .others-tab {
        text-align: center;
        cursor: pointer;
        color: #FFF;
      }
      .icon-width {
        width: 66px;
      }
    }
  }
  .edit-main {
    flex: 1;
    height: calc(100% - 40px);
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    background: #1c1e22;
    .left-edit-main {
      flex: none;
      position: relative;
      width: 185px;
      height: 100%;
      background: #1d1f26;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
    .right-edit-main {
      flex: 1;
      background:#f0f3f4;
      overflow-y: auto;
      .grid-item-inner {
        background: #fff;
        box-sizing: content-box;
        height: 100%;
        //display: flex;
        border: 1px solid #f2f2f2;
        //align-items: center;
        padding: 0 10px;
      }
      .active .grid-item-inner {
        border-color: #468cff;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .config-manager-container {
      width: 340px;
      height: 100%;
      z-index: 90;
      background: #1c1f25;
      position: relative;
      transition: width .25s ease-in-out;
    }
  }
  &/deep/ .el-dialog__wrapper .el-dialog:not(.is-fullscreen) {
    background: #222425;
    .el-dialog__header > .el-dialog__title {
      color: #2483FF;
    }
  }
}
body .component-icon {
  width: 22px;
  height: 22px;
  color: #fff;
  vertical-align: middle;
}  
.el-dropdown-menu {
  background-color: #222528;
  min-width: 56px;
  .el-dropdown-menu__item {
    &:hover {
      background-color: #2e343c;
    }
  }
  
}
</style>
<style lang="scss">
.el-popper[x-placement^=bottom] .popper__arrow::after {
  border-bottom-color:#222528
}
</style>
