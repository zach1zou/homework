import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//引入iconfont
import "./assets/fonts/iconfont.css";

//引入axios
import axios from "axios";
//设置默认baseURL
axios.defaults.baseURL = "https://www.escook.cn";
//挂载在Vue上
Vue.prototype.$axios = axios;

//添加一个全局的自定义指令
Vue.directive("focus", {
  inserted(ele) {
    ele.focus();
  },
});

//添加一个自定义属性根据list的权限值选择是否可以编辑
Vue.directive("permission", {
  inserted(ele, bilind, vnode) {
    if (bilind.value == "admin" || bilind.value == "dog") {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
