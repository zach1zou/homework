import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import axios from "axios";
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://www.liulongbin.top:3006";
//挂载一个刷新函数！
Vue.prototype.$renderMyBook = function () {
  this.$axios({
    url: "/api/getbooks",
  }).then((res) => {
    if (res.status !== 200) return alert("请求图书失败" + res.statusText);
    this.list = res.data.data;
  });
};
new Vue({
  render: (h) => h(App),
}).$mount("#app");
