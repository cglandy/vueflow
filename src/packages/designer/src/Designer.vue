<template>
  <div class="vf-designer">
    <div class="toolbar"></div>
    <div class="container">
      <div class="component-panel" :style="{'width':componentContainerWidth+'px'}">
        <component-panel />
      </div>
      <div class="canvas">
        <node
          v-for="(item,index) in flowData.nodes"
          :key="index"
          :offset="item.offset"
          :shape="item.shape"
        ></node>
        <svg width="600px" height="100px">
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="0"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
            </marker>
          </defs>
          <line
            x1="295"
            y1="50"
            x2="95"
            y2="75"
            stroke="#000"
            stroke-width="5"
            marker-end="url(#arrow)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import node from "./node";
import componentPanel from "./componentPanel";
export default {
  name: "designer",
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
          shape: "square",
          offset: {
            width: 100,
            height: 100,
            top: 20,
            left: 30
          }
        },
        abcese: {
          shape: "circle",
          offset: {
            width: 100,
            height: 100,
            top: 220,
            left: 130
          }
        }
      }
    };
  },
  components: {
    node,
    componentPanel
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
      .component-panel:nth-child(1) {
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
    .canvas:nth-child(2) {
      flex: 1;
      position: relative;
    }
  }
}
</style>
