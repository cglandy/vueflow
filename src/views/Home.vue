<template>
  <div class="container">
    <!-- <header>
      <h3>vue flow</h3>
    </header> -->
    <div>
      <Designer></Designer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less" scoped>
.container {
  height:100%;
  display: flex;
  flex-direction: column;
  header {
    height: 60px;
    border:1px solid #DCDFE6
  }
  & > div {
    flex: 1;
  }
}
</style>
