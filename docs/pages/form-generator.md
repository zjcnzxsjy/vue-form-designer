# form-generator解析器
## 例子
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
