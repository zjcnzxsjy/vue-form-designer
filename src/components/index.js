import Vue from "vue";
import formDesigner from './form-designer/Form-designer.vue';
import formGenerator from './form-generator/Form-generator.vue';


const VueFormDesigner = {
    formDesigner,
    formGenerator
}


Object.keys(VueFormDesigner).forEach(name => {
    Vue.component(name, VueFormDesigner[name]);
});

export default VueFormDesigner;
export { formDesigner, formGenerator };