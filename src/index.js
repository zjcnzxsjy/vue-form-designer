import Vue from "vue";
import formDesigner from './components/form-designer/Form-designer.vue';
import formGenerator from './components/form-generator/Form-generator.vue';


const VueFormDesigner = {
    formDesigner,
    formGenerator
}


Object.keys(VueFormDesigner).forEach(name => {
    Vue.component(name, VueFormDesigner[name]);
});

export default VueFormDesigner;
export { formDesigner, formGenerator };