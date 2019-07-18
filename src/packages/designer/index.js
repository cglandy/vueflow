import designer from "./src/designer.vue";
designer.install=function(Vue){
    Vue.component(designer.name,designer);
};
export default designer;