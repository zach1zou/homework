import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'; // 引入第三方包里的某个css文件
import App from './App.vue';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
