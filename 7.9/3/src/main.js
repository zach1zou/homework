import Vue from "vue";
import App from "./App.vue";

//引入路由用模块
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";

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

//设置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/MyGoodsList",
  },
  {
    path: "/MyGoodsList",
    component: MyGoodsList,
  },
  {
    path: "/MyGoodsSearch",
    component: MyGoodsSearch,
  },
  {
    path: "/MyUserInfo",
    component: MyUserInfo,
  },
];
const router = new VueRouter({
  routes,
});

//添加一个全局的自定义指令
Vue.directive("focus", {
  inserted(ele) {
    ele.focus();
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
