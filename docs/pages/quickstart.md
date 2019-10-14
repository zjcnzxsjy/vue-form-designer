# 快速上手
## 引入第三方组件
本项目使用Element-ui组件作为ui框架，具体引入方法请参考Element-ui文档 [快速上手](https://element.eleme.cn/#/zh-CN/component/quickstart)。使用vue-grid-out作为设计器的栅格布局，实现表单组件位置拖拽和宽度调整。例外一个叫我重要的三方组件是ace editor，手动优化精简了不需要的模块。
## 引入vue-form-designer
### 完整引入
```
import vueFormDesinger from "vue-form-designer"
import 'vue-form-designer/dist/vue-form-designer.css'

Vue.use(FormMaking)
```
### 引入部分组件
```
import {
  formDesigner,
  formGenerator
} from 'vue-form-designer'
import 'vue-form-designer/dist/vue-form-designer.css'

Vue.component(formDesigner.name, formDesigner)
Vue.component(formGenerator.name, formGenerator)
```
