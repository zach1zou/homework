import Vue from "vue";

//引入路由模块
import layout from "@/views/layout";
import home from "@/views/home";
import search from "@/views/search";
import Play from "@/views/Play";

import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    component: layout,
    redirect: "/layout/home",
    children: [
      { path: "home", component: home, meta: { title: "首页" } },
      { path: "search", component: search, meta: { title: "搜索" } },
    ],
  },
  //   {
  //     path: "/play",
  //     component: Play,
  //   },
];

const router = new VueRouter({ routes });
export default router;
