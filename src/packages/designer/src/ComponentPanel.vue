<template>
  <ul class="vf-component-panel">
    <li v-for="(item,index) in cmps" :key="index" :title="item.desc" @mousedown="onMousedown(item)">
      <i :class="['iconfont',item.icon]" :style="{'color':item.color||'#444444'}" />
    </li>
  </ul>
</template>

<script>
import { variables } from "@/utils";
export default {
  name: "component-panel",
  data() {
    return {
      cmps: [
        {
          name: "line",
          icon: "icon-connector",
          desc: "连接缍",
          type: "line",
          color: variables.colors.DEFAULT_COLOR
        },
        {
          name: "start",
          icon: "icon-start",
          desc: "开始节点",
          type: "node",
          color: variables.colors.SUCCESS_COLOR
        },
        {
          name: "end",
          icon: "icon-end",
          type: "node",
          desc: "结束节点",
          color: variables.colors.DANGER_COLOR
        }
      ]
    };
  },
  methods:{
    onMousedown(item){
      this.$emit("mousedown",item.type);
    }
  },
  mounted() {
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/theme.less";
.theme() {
  .vf-component-panel {
    li {
      background-color: @third-border-color;
      &:hover {
        background-color: @first-border-color;
      }
    }
  }
}
.default-theme {
  .default-theme-var();
  .theme();
}
.vf-component-panel {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    width: 50px;
    height: 50px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    border-radius: 5px;
    i {
      font-size: 32px;
      margin: 0 auto;
    }
  }
}
</style>
