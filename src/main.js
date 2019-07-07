import Vue from "vue";
import App from "./App.vue";
import packages from "@/packages";
Vue.use(packages);

import ELEMENT from "element-ui";
Vue.use(ELEMENT);

import jQuery from "jquery";
window.$ = jQuery;
import "./assets/css/base.less";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
