import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import svgIcon from "@/components/svg-icon/SvgIcon"

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/**
 * @description 加载svg
*/
const req = require.context('./assets/svgIcon', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
Vue.component('svg-icon', svgIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
