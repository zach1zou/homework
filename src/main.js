import Vue from 'vue'
import App from './App.vue'

import checkKey from '@/components/checkKey'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/fonts/iconfont.css"
Vue.config.productionTip = false

import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$http=axios
 

  //  console.log(checkKey);
Vue.directive('focus', {
  
  inserted(el) {
      el.focus();
  },
});


//自定义权限按钮
 Vue.directive('btn-key',{
   inserted(el, binding) {
  
     let buttonKey = binding.value;
    //  console.log(el);
    //  console.log(buttonKey);
        // 代表某个元素需要通过权限验证
        if(buttonKey){
            let key = checkKey(buttonKey)
            if(!key){//没有权限
                el.remove()  //删除按钮
            }
        }else{
          return alert('错误')
        }
    },
});



new Vue({
  render: h => h(App),
}).$mount('#app')
