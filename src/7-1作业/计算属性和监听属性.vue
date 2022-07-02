<template>
  <div id="app">{{ total }}</div>
</template>

<script>
// 计算开销比较大(计算次数多或者异步处理)的时候，会使用侦听器watch来得到计算结果。
// 而其他情况建议使用计算属性computed，因为缓存节省多次计算的性能。
var vm = new Vue({
  el: "#app",
  data: {
    num: 10,
    price: 8.8,
  },
  // (1).计算属性是一个函数， 返回的结果是计算属性的结果。
  // (2).第一次计算的时候会把结果缓存起来。
  // (3).后续用到计算属性，如果计算属性中用到的数据没有发生变化，则会读取缓存的结果， 不会重新计算。反之重新计算，并更新值到缓存中
  // 每次计算的结果缓存的时候，都会重新创建一个变量保存结果。
  computed: {
    total: function () {
      return this.num * this.price;
    },
  },
  // 当我们定义一个侦听器的时候，侦听器与data中的属性同名，当属性的值发生改变的时候，侦听器被触发执行。
  // 一个侦听器对应data中的一个属性，当属性发生变化时触发侦听器的执行
  watch: {
    num: function (val) {
      this.total = val * this.price;
    },
    price: function (val) {
      this.total = this.num * val;
    },
    obj: {
      handler(val, old) {
        // 1. 深度监听用到handler
        console.log(val);
      },
      deep: true, // 2. deep必须为true
    },
  },
});
export default {};
// (1).计算属性的应用场景是计算的内容需要依赖多个属性的情况侦听器的应用场景是计算的内容依赖一个属性的情况
// (2).计算属性缓存结果时每次都会重新创建变量，而侦听器是直接计算，不会创建变量保存结果也就意味着，
// 数据如果会反复的发生变化，计算很多次的情况下，计算属性的开销将会更大，也就意味着这种情况不适合使用计算属性，适合使用侦听器
// 那么，如果一个数据反复会被使用，但是它计算依赖的内容很少发生变化的情况下，计算属性会缓存结果，就更加适合这种情况。
// (3).computed的结果是通过return返回的，而watch不需要return。
// (4).watch中的参数可以得到侦听属性改变的最新结果，而computed函数没有这种参数
// watch只会监听数据的值是否发生改变，而不会监听地址的变化，如果需要监听引用类型的数据变化，
// 需要深度监听：obj:{handler(newVal){},deep:true}------用handler+deep的方式进行深度监听。
// 在特殊的情况下(更改数组中的数据时，数组已经更改，但是视图没有更新)，watch无法监听数组的变化,更改数组必须要用splice()或者$set。
</script>

<style>
</style>