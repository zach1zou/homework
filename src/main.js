// webpack 入口文件
import Vue from "vue";
// 引入应用根组件
import App from "./App.vue";
// 提示语
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

import axios from "axios";
// axios.defaults.baseURL = "http://www.liulongbin.top:3006";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
// 全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});
// 构造函数
// 实例化vue对象
new Vue({
  // 内置函数 渲染根应用
  render: (h) => h(App),
}).$mount("#app");

const fn = () => {
  return false;
};
fn();
