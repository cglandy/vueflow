import Designer from "./src/Designer.vue";
Designer.install=function(Vue){
    Vue.component(Designer.name,Designer);
};
export default Designer;