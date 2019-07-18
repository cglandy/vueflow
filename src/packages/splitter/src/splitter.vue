<template>
  <div :class="'splitter ' + type" :style="orientation + ': ' + size"></div>
</template>
<script>
export default {
  name: "Splitter",
  props: {
    type: {
      type: String,
      default: "vertical"
    },
    orientation: String,
    size: {
      type: String,
      default: "-5px"
    },
    hasShade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dragging: false,
      shade: null
    };
  },
  mounted() {
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  },
  methods: {
    createShade() {
      this.shade = document.createElement("DIV");
      this.shade.style.position = "absolute";
      this.shade.style.top = 0;
      this.shade.style.bottom = 0;
      this.shade.style.left = 0;
      this.shade.style.right = 0;
      this.shade.style.background = "transparent";
      this.shade.style.cursor =
        this.type == "vertical" ? "col-resize" : "row-resize";
      this.shade.style.zIndex = 999999999;

      document.body.appendChild(this.shade);
    },
    onMouseDown(e) {
      this.dragging = this.$el === e.target;
      if (this.dragging) {
        if (this.hasShade) this.createShade();
      }
    },
    onMouseMove(e) {
      if (!this.dragging) return;

      e.preventDefault();
      e.stopPropagation();

      this.$emit("drag", e);
    },
    onMouseUp() {
      if (!this.dragging) return;

      if (this.hasShade) this.shade.parentNode.removeChild(this.shade);
      this.dragging = false;
    }
  }
};
</script>

<style lang="less" scoped>
.splitter {
  background-color: transparent;
  position: absolute;

  &.vertical {
    cursor: col-resize;
    height: 100%;
    width: 10px;
  }

  &.horizontal {
    min-height: 1px;
    cursor: row-resize;
    width: 100%;
    height: 10px;
  }
}
</style>