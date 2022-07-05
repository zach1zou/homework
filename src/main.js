import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import { MessageBox } from 'element-ui';
import { Message } from 'element-ui'

Vue.config.productionTip = false
//全局配置接口
import axios from 'axios'
axios.defaults.baseURL='http://123.57.109.30:3006'
Vue.prototype.$http = axios

Vue.prototype.$message = Message
Vue.prototype.$confirm=MessageBox.confirm

Vue.use(Element);
//全局注册组件
// Vue.component('PannertVue',Panner)


// 全局定义过滤器
// Vue.filter('reverse', (val) => { return val.split('').reverse().join('') })


new Vue({//实例化vue对象
  render: h => h(App),
}).$mount('#app')//挂载
