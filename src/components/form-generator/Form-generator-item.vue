<template>
  <el-form-item
    :label="!showGridButtonItems.includes(widget.type)? widget.label : null"
    :prop="!showGridButtonItems.includes(widget.type)? widget.prop : null"
    :label-width="showGridButtonItems.includes(widget.type)? '10px' : widget.labelWidth === ''? null : widget.labelWidth + 'px'"
    :rules="validRules.length === 0? null : validRules"
    v-bind="!showGridButtonItems.includes(widget.type)? widget : null">
    <template v-if="dateTypes.includes(widget.type)">
      <component 
      :is="PIDatePicker"
      :value="formGenerator.model[widget.prop]"
      :prop="widget.prop"
      :type="widget.type"
      :options="widget.options">
    </component>
    </template>
    <template v-else-if="showGridButtonItems.includes(widget.type)">
      <component 
      :is="widget.type"
      :options="widget.options"
      :label="widget.label">
    </component>
    </template>
    <template v-else>
      <component 
        :is="widget.type"
        :value="formGenerator.model[widget.prop]"
        :prop="widget.prop"
        :options="widget.options"
        :children="widget.children? widget.children : null">
      </component>
    </template>
  </el-form-item>
</template>
<script>
import {registerModules} from '@/utils/Register';
import { isEmpty, isNumber } from "lodash"

let modules = require.context('./widgets', false, /\.vue$/);
modules = Object.assign({}, registerModules(modules));

const formComponents = {};
for(let key in modules) {
  formComponents[modules[key].name] = modules[key];
}

const SENIOR_RULES = {
  // 整数
  intege: {
    pattern: /^-?\d+$/,
    message: '输入的不是整数格式'
  },
  // 正整数
  intege1: {
    pattern: /^[1-9]\d*$/,
    message: '输入的不是正整数格式'
  },
  // 负整数
  intege2: {
    pattern: /^-[1-9]\d*$/,
    message: '输入的不是负整数格式'
  },
  // 数字
  num: {
    pattern: /^-?[1-9]\d*$|^0/,
    message: '只能输入数字格式'
  },
  // 非负整数
  num1: {
    pattern: /^[1-9]\d*$|^0$/,
    message: '只能输入非负整数数字格式'
  },
  // 非正整数
  num2: {
    pattern: /^-[1-9]\d*$|^0$/,
    message: '只能输入非正整数数字格式'
  },
  // 浮点数
  decmal: {
    pattern: /^-?(([1-9]\d*)|0)(\.\d+)?$/,
    message: '只能输入浮点数格式'
  },
  // 正浮点数
  decmal1: {
    pattern: /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,
    message: '只能输入正浮点数格式'
  },
  // 负浮点数
  decmal2: {
    pattern: /^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/,
    message: '只能输入负浮点数格式'
  },
  // 浮点数
  // decmal3: {
  //   pattern:  /^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/,
  //   message: '只能输入浮点数格式'
  // },
  // 非负浮点数
  decmal4: {
    pattern: /^(([1-9]\d*)|0)(\.\d+)?$/,
    message: '只能输入非负浮点数格式'
  },
  // 非正浮点数
  decmal5: {
    pattern: /^(-([1-9]\d*.\d*|0.\d*[1-9]\d*))|0?.0+|0$/,
    message: '只能输入非正浮点数格式'
  },
  // 邮件
  email: {
    pattern: /^(\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+){0,1}$/,
    message: '邮件地址不正确'
  },
  // 颜色
  color: {
    pattern: /^[a-fA-F0-9]{6}$/,
    message: '只能输入颜色格式'
  },
  // url
  url: {
    pattern: /^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/,
    message: '只能输入url格式'
  },
  // 仅中文
  chinese: {
    pattern: /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/,
    message: '只能输入中文格式'
  },
  // ascii
  ascii: {
    pattern: /^[\x00-\xFF]+$/,
    message: '只能输入ACSII字符格式'
  },
  // 邮编
  zipcode: {
    pattern: /^\d{6}$/,
    message: '邮编输入格式不正确'
  },
  // 手机号
  mobile: {
    pattern: /^(13|15|18|17)[0-9]{9}$/,
    message: '移动电话格式不正确'
  },
  // ip地址
  ip4: {
    pattern: /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/,
    message: '只能输入ip4地址格式'
  },
  // 图片
  picture: {
    pattern: /(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/,
    message: '只能输入图片格式'
  },
  // 压缩文件
  rar: {
    pattern: /(.*)\.(rar|zip|7zip|tgz)$/,
    message: '只能输入压缩文件格式'
  },
  // 日期
  date: {
    pattern: /^\d{4}\d{1,2}\d{1,2}$/,
    message: '日期格式不正确'
  },
  // qq
  qq: {
    pattern: /[1-9][0-9]{4,11}/,
    message: 'QQ号码格式不正确'
  },
  // 电话号码(包括验证国内区号,国际区号,分机号)
  tel: {
    pattern: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
    message: '电话号码格式不正确'
  },
  // 用户名注册。匹配由数字、26个英文字母或者下划线组成的字符串
  username: {
    pattern: /^\w+$/,
    message: '只能输入由数字、26个英文字母或者下划线组成的字符串'
  },
  // 字母
  letter: {
    pattern: /^[A-Za-z]+$/,
    message: '只能输入字母格式'
  },
  // 大写字母
  letter_u: {
    pattern: /^[A-Z]+$/,
    message: '只能输入大写字母格式'
  },
  // 小写字母
  letter_l: {
    pattern: /^[a-z]+$/,
    message: '只能输入小写字母格式'
  }
};

export default {
  name: "formGeneratorItem",
  componentName: "formGeneratorItem",
  props: {
    widget: Object
  },
  inject: ["formGenerator"],
  components: {
    ...formComponents
  },
  computed: {
    validRules() {
      let seniorRules;
      if (!isEmpty(this.widget.validRules) && this.widget.validRules.length > 0) {
        seniorRules = this.widget.validRules.map(rule => {
          return { pattern: SENIOR_RULES[rule].pattern, message: SENIOR_RULES[rule].message, trigger: "blur" }
        })
      }
      let selfRules;
      if (!isEmpty(this.widget.rules)) {
        selfRules = Object.assign({}, this.widget.rules);
        selfRules.test = eval(selfRules.test);
        
      }
      console.log([].concat(seniorRules || selfRules || []))
      return [].concat(seniorRules || selfRules || []);
    }
  },
  data() {
    return {
      dateTypes: Object.freeze(["date", "daterange", "datetime", "datetimerange", "year", "month"]),
      showGridButtonItems: Object.freeze(["PISearchButton", "PIResetButton", "PICustomButton"]),
      PIDatePicker: "PIDatePicker"
    }
  },
  created() {
    console.log(this.widget)
  },
  mounted() {
    if (this.widget.prop) {
      this.$on("form.generator.change", this.formValueChange)
    }
  },
  methods: {
    formValueChange(prop, val) {
      console.log(prop, val)
      this.formGenerator.model[prop] = val;
    }
  }
}
</script>
