<template>
  <!-- <div
    class="vf-node"
    :style="{'width':width+'px','height':height+'px','top':top+'px','left':left+'px'}"
  ></div>-->
  <div
    class="vf-node"
    @mouseover="mouseover=true"
    @mouseleave="mouseover=false"
    :style="{'width':offset.width+borderWidth*2+'px','height':offset.height+borderWidth*2+'px','top':offset.top+'px','left':offset.left+'px'}"
  >
    <div class="vf-node-content">这是一个啥</div>
    <svg
      width="100%"
      height="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      v-if="shape=='square'"
    >
      <rect
        :width="offset.width+borderWidth*2"
        rx="5"
        ry="5"
        :height="offset.height+borderWidth*2"
        :class="['vf-node-svg-border',mouseoverClass]"
      />
      <rect
        :x="borderWidth"
        :y="borderWidth"
        rx="5"
        ry="5"
        :width="offset.width"
        :height="offset.height"
        class="vf-node-svg square"
      />
    </svg>
    <svg
      width="100%"
      height="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      v-else-if="shape=='circle'"
    >
      <circle
        :cx="circleCoord.x"
        :cy="circleCoord.y"
        :r="(offset.width/2)+borderWidth"
        :class="['vf-node-svg-border',mouseoverClass]"
      />
      <circle
        :cx="circleCoord.x"
        :cy="circleCoord.y"
        :r="(offset.width/2)"
        class="vf-node-svg circle"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Node",
  props: {
    offset: Object,
    //square,circle,rectangle,ellipse,rhombus
    shape: {
      type: String,
      default: "square"
    }
  },
  data() {
    return {
      mouseover: false,
      borderWidth: 5,
      offsetX: 0,
      offsetY: 0
    };
  },
  computed: {
    mouseoverClass() {
      return this.mouseover ? "hover" : "";
    },
    circleCoord() {
      return {
        x: this.offset.width / 2 + this.borderWidth,
        y: this.offset.height / 2 + this.borderWidth
      };
    },
    canvasCoord() {
      let $canvas = $(this.$el).parent();
      return {
        x: $canvas.offset().left,
        y: $canvas.offset().top,
        width: $canvas.width(),
        height: $canvas.height(),
        right: $canvas.offset().left + $canvas.width(),
        bottom: $canvas.offset().top + $canvas.height()
      };
    }
  },
  methods: {
    onMousedown(e) {
      e = e || window.event;
      this.offsetX = e.clientX - this.offset.left;
      this.offsetY = e.clientY - this.offset.top;
      document.addEventListener("mouseup", this.onMouseup);
      document.addEventListener("mousemove", this.onMousemove);
    },
    onMousemove(e) {
      e = e || window.event;
      this.offset.left = e.clientX - this.offsetX;
      this.offset.top = e.clientY - this.offsetY;
      if (
        this.offset.left >
        this.canvasCoord.width - this.offset.width - this.borderWidth * 2
      ) {
        this.offset.left =
          this.canvasCoord.width - this.offset.width - this.borderWidth * 2;
      }
      if (
        this.offset.top >
        this.canvasCoord.height - this.offset.height - this.borderWidth * 2
      ) {
        this.offset.top =
          this.canvasCoord.height - this.offset.height - this.borderWidth * 2;
      }
      if (this.offset.top < 0) {
        this.offset.top = 0;
      }
      if (this.offset.left < 0) {
        this.offset.left = 0;
      }
    },
    onMouseup() {
      document.removeEventListener("mousemove", this.onMousemove);
      document.removeEventListener("mouseup", this.onMouseup);
    }
  },
  mounted() {
    this.$el.addEventListener("mousedown", this.onMousedown);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/theme.less";
.theme() {
  .vf-node {
    .vf-node-svg {
      &.square {
        fill: @primary-color;
      }
      &.circle {
        fill: @success-color;
      }
    }
    .vf-node-svg-border {
      fill: #e7e7e7;
      &.hover {
        fill: #aaaaaa;
      }
    }
  }
}
.default-theme {
  .default-theme-var();
  .theme();
}
.vf-node {
  position: absolute;
  cursor: move;
  .vf-node-content {
    position:inherit;
    color: #ffffff;
    align-items: center;
    align-content: center;
    justify-items: center;
  }
}
</style>
