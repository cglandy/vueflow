<template>
  <div
    class="vf-node"
    :style="{'width':width+'px','height':height+'px','top':top+'px','left':left+'px'}"
  ></div>
</template>

<script>
export default {
  name: "Node",
  props: {
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 80
    },
    top: Number,
    left: Number
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/theme.less";
.theme() {
  .vf-node {
    border: 2px solid @primary-color;
    background-color: @primary-bg-color;
  }
}
.default-theme {
  .default-theme-var();
  .theme();
}
.vf-node {
  border-radius: 5px;
  position: absolute;
}
</style>
