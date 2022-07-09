import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

//引入路由模块
import index from "@/views/index.vue";
import Myclass from "@/views/Myclass.vue";
import dingdan from "@/views/dingdan.vue";
import my from "@/views/my.vue";
import youdingdan from "@/views/two/youdingdan.vue";
import mydingdan from "@/views/two/mydingdan.vue";

//引入路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: index,
  },
  {
    path: "/Myclass",
    component: Myclass,
  },
  {
    path: "/dingdan",
    component: dingdan,
    children: [
      {
        path: "youdingdan",
        component: youdingdan,
      },
      {
        path: "mydingdan",
        component: mydingdan,
      },
    ],
  },
  {
    path: "/my",
    component: my,
  },
];
const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
