import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false


import axios from "axios"
axios.defaults.baseURL='https://www.escook.cn'
Vue.prototype.$axios = axios

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
