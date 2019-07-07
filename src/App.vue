<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/Example">Example</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  height:30px;
  line-height: 30px;
  text-align: left;
  background: #2c3e50;
  a{
    color:#e7e7e7;
    text-decoration: none;
    padding:0 10px;
  }
  a:hover{
    color:#0067ff;
  }
}
</style>
