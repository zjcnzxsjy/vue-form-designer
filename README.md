# vue-form-designer
基于vue和element-ui的表单可视化设计器。  
[在线DEMO](https://zjcnzxsjy.github.io/vue-form-designer/)
## 安装
推荐使用npm方式安装
```sh
npm install vue-form-designer --save
```
## 快速上手
### 引入第三方组件
本项目使用Element-ui组件作为ui框架，具体引入方法请参考Element-ui文档 [快速上手](https://element.eleme.cn/#/zh-CN/component/quickstart)。使用vue-grid-out作为设计器的栅格布局，实现表单组件位置拖拽和宽度调整。另外一个三方组件是ace editor，手动优化精简了不需要的模块。
### 引入vue-form-designer
#### 完整引入
```js
import vueFormDesinger from "vue-form-designer"
import 'vue-form-designer/dist/vue-form-designer.css'

Vue.use(FormMaking)
```
#### 引入部分组件
```js
import {
  formDesigner,
  formGenerator
} from 'vue-form-designer'
import 'vue-form-designer/dist/vue-form-designer.css'

Vue.component(formDesigner.name, formDesigner)
Vue.component(formGenerator.name, formGenerator)
```
## form-designer
### 例子
```html
<form-desinger
  :data="data">
</form-desinger>
```
### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
data | 设计器数据 | Object | - | -
### Events

事件名称 | 说明 | 回调参数
---|---|---
save-form | 设计器保存时触发的事件 | formConfigData,layout
## form-generator
### 例子
```html
<form-generator 
    :schema="schema" 
    :model="model">
</form-generator>
```
schema参数
```json
{
  "config": {
    "type": "PIForm",
    "labelPosition": "right",
    "labelWidth": 100,
    "labelSuffix": "",
    "hideRequiredAsterisk": false,
    "showMessage": true,
    "statusIcon": false,
    "validateOnRuleChange": true,
    "size": "",
    "disabled": false
  },
  "widgets": [
    {
      "type": "PIText",
      "label": "单行文本",
      "labelWidth": "",
      "prop": "text",
      "span": {
        "span": 6,
        "lg": 24,
        "md": 24,
        "sm": 24,
        "xs": 24,
        "offset": 0,
        "y": 0
      },
      "required": false,
      "validRules": [],
      "rules": {},
      "options": {
        "size": "",
        "show-word-limit": false,
        "placeholder": "请输入",
        "disabled": false,
        "readonly": false,
        "maxlength": null,
        "minlength": 0,
        "prefix-icon": "",
        "suffix-icon": "",
        "autofocus": false,
        "clearable": true,
        "validate-event": true,
        "width": ""
      }
    },
    {
      "type": "PIDatePicker",
      "label": "日期选择框",
      "labelWidth": "",
      "prop": "date",
      "span": {
        "span": 6,
        "lg": 24,
        "md": 24,
        "sm": 24,
        "xs": 24,
        "offset": 0,
        "y": 0
      },
      "required": false,
      "validRules": [],
      "rules": {},
      "options": {
        "type": "date",
        "format": "yyyy-MM-dd",
        "placeholder": "",
        "size": "",
        "disabled": false,
        "clearable": true,
        "readonly": false,
        "start-placeholder": "",
        "end-placeholder": "",
        "align": "left",
        "range-separator": "-",
        "value-format": "",
        "unlink-panels": false,
        "prefix-icon": "el-icon-date",
        "clear-icon": "el-icon-circle-close",
        "validate-event": true,
        "width": ""
      }
    },
    {
      "type": "PISwitch",
      "label": "开关",
      "labelWidth": "",
      "prop": "switch",
      "span": {
        "span": 5,
        "lg": 24,
        "md": 24,
        "sm": 24,
        "xs": 24,
        "offset": 0,
        "y": 0
      },
      "required": false,
      "validRules": [],
      "rules": {},
      "options": {
        "disabled": false,
        "width": 40,
        "active-text": "",
        "inactive-text": "",
        "active-color": "#409EFF",
        "inactive-color": "#C0CCDA",
        "validate-event": true
      }
    },
    {
      "type": "PISearchButton",
      "label": "查询",
      "span": {
        "span": 2,
        "lg": 4,
        "md": 4,
        "sm": 4,
        "xs": 4,
        "offset": 0,
        "y": 0
      },
      "options": {
        "type": "ghost",
        "size": "",
        "icon": "",
        "round": false,
        "width": ""
      }
    },
    {
      "type": "PIResetButton",
      "label": "重置",
      "span": {
        "span": 2,
        "lg": 4,
        "md": 4,
        "sm": 4,
        "xs": 4,
        "offset": 0,
        "y": 0
      },
      "options": {
        "type": "ghost",
        "size": "",
        "icon": "",
        "round": false,
        "width": ""
      }
    }
  ]
}
```
model参数
```json
{
    "text": "文本",
    "date": "2019-01-01",
    "switch": true
}
```