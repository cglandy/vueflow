import desinger from "./designer";
import splitter from "./splitter";
const components = [desinger, splitter];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  desinger,
  splitter
};
