import Vue from "vue";
import formDesigner from './components/form-designer/Form-designer.vue';
import formGenerator from './components/form-generator/Form-generator.vue';


const VueFormDesigner = {
    formDesigner,
    formGenerator
}

// 为组件添加 install 方法，用于按需引入
VueFormDesigner.install = function (Vue) {
  Object.keys(VueFormDesigner).forEach(name => {
    Vue.component(name, VueFormDesigner[name]);
  });
}

const install = function (Vue) {
  Object.keys(VueFormDesigner).forEach(name => {
    Vue.component(name, VueFormDesigner[name]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VueFormDesigner;
export { formDesigner, formGenerator };