import Vue from "vue";
import App from "./App.vue";

//引入css和flexible
import "@/assets/mobile/flexible";
import "@/assets/styles/reset.css";

//引入路由
import router from "@/router";
//注册vant组件
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Col,
  Row,
  Image as VanImage,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Icon,
  Search,
  Tag,
  List,
} from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
