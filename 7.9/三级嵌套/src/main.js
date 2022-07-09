import Vue from "vue";
import App from "./App.vue";

//引入路由的模块
import UI_Router from "@/views/UI_Router.vue";
import Contacts from "@/views/Contacts.vue";
import About from "@/views/About.vue";
import All_contacts from "@/views/two/All_contacts.vue";
import Alice from "@/views/two/Alice.vue";
import Bob from "@/views/two/Bob.vue";
import Bob11111 from "@/views/three/Bob11111";
import Bob22222 from "@/views/three/Bob22222";

Vue.config.productionTip = false;

//设置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/UI_Router",
  },
  {
    path: "/UI_Router",
    component: UI_Router,
  },
  {
    path: "/Contacts",
    component: Contacts,
    children: [
      {
        path: "All_contacts",
        component: All_contacts,
      },
      {
        path: "Alice",
        component: Alice,
      },
      {
        path: "Bob",
        component: Bob,
        children: [
          {
            path: "Bob11111",
            component: Bob11111,
          },
          {
            path: "Bob22222",
            component: Bob22222,
          },
        ],
      },
    ],
  },
  {
    path: "/About",
    component: About,
  },
];
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
