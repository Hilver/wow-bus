<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 0px;
}
</style>
