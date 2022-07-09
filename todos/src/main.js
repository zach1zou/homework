import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'; // 引入第三方包里的某个css文件
import App from './App.vue';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false; //添加一个全局的自定义指令
Vue.directive('focus', {
  inserted(ele) {
    ele.focus();
  },
});

//添加一个自定义属性根据list的权限值选择是否可以编辑
Vue.directive('permission', {
  inserted(ele, bilind, vnode) {
    if (bilind.value == 'admin' || bilind.value == 'dog') {
      ele.style.display = 'block';
    } else {
      ele.style.display = 'none';
    }
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
