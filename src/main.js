import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false
// 全局定义过滤器
Vue.filter('reverse', (val) => { return val.split('').reverse().join('')})
new Vue({//实例化vue对象
  render: h => h(App),
}).$mount('#app')//挂载
