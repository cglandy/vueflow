<template>
  <div class="vf-designer">
    <div class="toolbar"></div>
    <div class="container">
      <div :style="{'width':componentContainerWidth+'px'}"></div>
      <div>
        <Node
          v-for="(item,index) in flowData.nodes"
          :key="index"
          :width="item.width"
          :height="item.height"
          :top="item.top"
          :left="item.left"
        ></Node>
      </div>
    </div>
  </div>
</template>

<script>
import Node from "./Node.vue";
export default {
  name: "Designer",
  props: {
    componentContainerWidth: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      flowData: {
        nodes: {},
        lines: {}
      }
    };
  },
  mounted() {
    this.flowData = {
      nodes: {
        abces: {
          width: 180,
          height: 60,
          top: 20,
          left: 30
        },
        abcese: {
          width: 180,
          height: 60,
          top: 220,
          left: 130
        }
      }
    };
  },
  components: {
    Node
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/theme.less";
.theme() {
  .vf-designer {
    height: 100%;
    .toolbar {
      border-bottom: 1px solid @first-border-color;
    }
    .container {
      & > div:nth-child(1) {
        border-right: 1px solid @first-border-color;
      }
    }
  }
}
.default-theme {
  .default-theme-var();
  .theme();
}
.vf-designer {
  display: flex;
  flex-direction: column;
  .toolbar {
    height: 60px;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: row;
    & > div:nth-child(2) {
      flex: 1;
      position: relative;
    }
  }
}
</style>
