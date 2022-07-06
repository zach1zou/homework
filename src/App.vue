<template>
  <div id="app">
   <IphoneEmail></IphoneEmail>
    <TableProp></TableProp>
    <!-- <PannerVue>
      <template #title>
        <span style="color: red;">我是标题</span>
      </template>
      <template v-slot:content="scope">
        <p>{{ scope.row.defaultOne}}</p>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </PannerVue> -->



    <!-- <template>
      <div>
        -->
    <!-- <axiosVue></axiosVue>
        <br>


        <br> <br> <br>
        <buttonVue :type="`danger`" :title="`危险按钮`" @myclick="btn">
        </buttonVue>

        <br>
        <br>
        <br>
        <table border="1" width="700" style="border-collapse: collapse">
          <caption>
            购物车
          </caption>
          <thead>
            <tr>
              <th>
                <input type="checkbox" v-model="isAll" /> <span>全选</span>
              </th>
              <th>名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>总价</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <TbodyVue :obj="item" v-for="(item, index) in goodList" :key="index"></TbodyVue>
          </tbody>
          <tfoot>
            <tr>
              <td>合计:{{count}}</td>
              <td colspan="5">
                {{ TotalPrice }}
              </td>
            </tr>
          </tfoot>
        </table> -->
    <!-- </div>
    </template> -->
    <!-- <MyDog v-for="(item,index) in list" :obj="item"> </MyDog>
    <hr />
    <p>显示喜欢的狗:</p>
    <ul>
      <li v-for="(item, index) in loveArr" :key="index" :arr="item">{{ item }}</li>
    </ul> -->
    <!-- <kaiyedachoubing1Vue :obj="item" v-for="(item, index) in arr" :key="item.name">
      </kaiyedachoubing1Vue>
      <kaiyedachoubingVue :obj="item.name" :price="item.price" :description="item.description"
        @changeFn="changePriceFn(index)" :ind="index" v-for="(item, index) in arr" :key="index">
      </kaiyedachoubingVue>
      <A></A>
      <B></B> -->
    <!-- <h3>案例：折叠面板</h3>
    <PannertVue :title=" name">
      </PannertVue> <PannertVue>
      </PannertVue> -->
    <!-- <JqgouwucheVue>
    </JqgouwucheVue> -->
    <!-- <FilterworkVue>
      </FilterworkVue>
      <ToggleTabVue>
      </ToggleTabVue>
      <ShowgaoliangVue>
      </ShowgaoliangVue>
      <BuybookstudyVue></BuybookstudyVue>
      <StudentInfoManageVue>
      </StudentInfoManageVue>
      <QuanxuanVue></QuanxuanVue>
      <GouwucheVue>
      </GouwucheVue>
      <ketang></ketang>
      <ReduceVue></ReduceVue>
      <StrsolveVue></StrsolveVue>
      <HelloWorldVue></HelloWorldVue> -->
  </div>
</template>
<script>
import IphoneEmail from './components/iphoneEmail.vue'
// import JqgouwucheVue from './components/Jqgouwuche.vue'
// import BookManageVue from './components/BookManage.vue';
// import axiosVue  from './components/axios.vue'
// import buttonVue from './components/button.vue'
// import TbodyVue from './components/tbody.vue'
// import MyDog from "./components/MyDog.vue"
// import A from './components/A.vue'
// import B from './components/B.vue'
// import kaiyedachoubing1Vue from './components/kaiyedachoubing1.vue'
// import kaiyedachoubingVue from './components/kaiyedachoubing.vue'
// import PannerVue from './components/Panner.vue'

import TableProp from './components/tableProp.vue'


// import FilterworkVue from './components/filterwork.vue'
// import BuybookstudyVue from './components/buybookstudy.vue'
// import QuanxuanVue from './components/quanxuan.vue'
// import StudentInfoManageVue from './components/studentInfoManage.vue'
// import ToggleTabVue from './components/ToggleTab.vue'
// import ShowgaoliangVue from './components/showgaoliang.vue'
// import HelloWorldVue from './components/HelloWorld.vue'
// import ReduceVue from './components/reduce.vue'
// import StrsolveVue from './components/strsolve.vue'
// import Ketang from './components/liebiaoad.vue'
// import GouwucheVue from './components/gouwuche.vue'
export default {
  props: [],
  components: {
    IphoneEmail,
    TableProp
},
  data () {
    return {
      // comName:'BookManageVue'

      // goodList: [
      //   {
      //     name: "诸葛亮",
      //     price: 1000,
      //     num: 1,
      //     checked: false,
      //   },
      //   {
      //     name: "蔡文姬",
      //     price: 1500,
      //     num: 1,
      //     checked: false,
      //   },
      //   {
      //     name: "妲己",
      //     price: 2000,
      //     num: 1,
      //     checked: false,
      //   },
      //   {
      //     name: "鲁班",
      //     price: 2200,
      //     num: 1,
      //     checked: false,
      //   },
      // ],
     
    
    }
  },
  methods: {
    // changePriceFn(ind) {
    //   this.arr[ind].price--
    //   // console.log(this.arr[ind].price);
    // }
    // btn() { 
    //   console.log(123);
    // }
    
  },
  created () {
  },
  mounted () {
  },
  filters: {
  },
  computed: {
    // count() {
    //   return this.goodList.reduce((sum, pre) => {
    //     return sum= sum + pre.num
    //   }, 0)
    // },
    // TotalPrice() { 
    //   return this.goodList.reduce((sum, pre) => { 
    //     return sum= sum + pre.num*pre.price
    //   },0)
    // },
    // isAll: { 
    //   set(val){ 
    //     this.goodList.forEach((ele) => {
    //       return ele.checked=val
    //      })
    //   },
    //   get() {
    //     return this.goodList.every((ele) => {
    //       return ele.checked==true
    //      })
    //    }
    // }
  },
  watch: {

  },
}
</script>
<style lang="less" scoped>

  
</style>
