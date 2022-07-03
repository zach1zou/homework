import Vue from 'vue'
import App from './App.vue'
import '../src/assets/styles/base.css'
import '../src/assets/styles/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
