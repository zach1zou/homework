// webpack 入口文件
import Vue from 'vue'
// 引入应用根组件
import App from './App.vue'
// 提示语
Vue.config.productionTip = false
// 构造函数
// 实例化vue对象
new Vue({
  // 内置函数 渲染根应用
  render: h => h(App),
}).$mount('#app')

const fn=()=>{return false;}
fn();