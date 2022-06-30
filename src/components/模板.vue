<template>
  <div id="app">
    <!-- vue2 template里只能有一个根元素-->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 导出文件代表的vue实例
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!--  scoped 组件局部生效 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
