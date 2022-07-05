<template>
  <div id="app">
    <BookManageVue ></BookManageVue>
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
import BookManageVue from './components/BookManage.vue';
// import axiosVue  from './components/axios.vue'
// import buttonVue from './components/button.vue'
// import TbodyVue from './components/tbody.vue'
// import MyDog from "./components/MyDog.vue"
// import A from './components/A.vue'
// import B from './components/B.vue'
// import kaiyedachoubing1Vue from './components/kaiyedachoubing1.vue'
// import kaiyedachoubingVue from './components/kaiyedachoubing.vue'
// import PannertVue from './components/Panner.vue'
// import JqgouwucheVue from './components/Jqgouwuche.vue'
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
    BookManageVue
    // TbodyVue,
    // buttonVue,
    // axiosVue
    // MyDog
    // HelloWorldVue,
    // ReduceVue,
    // StrsolveVue,
    // ShowgaoliangVue,
    // Ketang,
    // GouwucheVue,
    // ToggleTabVue,
    // StudentInfoManageVue,
    // QuanxuanVue,
    // BuybookstudyVue,
    // FilterworkVue
    // JqgouwucheVue,
    // kaiyedachoubingVue,
    // kaiyedachoubing1Vue,
    // A,B
},
  data () {
    return {
 

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
      // list: [
      //   {
      //     dogImgUrl:
      //       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pig66.com%2Fuploadfile%2F2021%2F0223%2F20210223075016116.jpg&refer=http%3A%2F%2Fwww.pig66.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425785&t=82ee8b47d09e770721232b0c8a92ca66",
      //     dogName: "博美",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zhuanboke.cn%2Fwp-content%2Fuploads%2F2021%2F09%2F20210925_614e86b93ec1e.jpg&refer=http%3A%2F%2Fwww.zhuanboke.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425423&t=93b39e09c10bdf594e125b5da38cbad6",
      //     dogName: "泰迪",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h809%2F20180211%2F1a16-fyrkuxt4076995.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425501&t=0cfb1b442248583e92b399369752da95",
      //     dogName: "金毛",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
      //     dogName: "哈士奇",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://img0.baidu.com/it/u=143654580,2727053860&fm=253&fmt=auto&app=138&f=JPEG?w=493&h=313",
      //     dogName: "阿拉斯加",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn21%2F622%2Fw528h894%2F20180711%2F9b55-hfefkqq4964458.png&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425744&t=8c97931bc3c61e9e5c46be93ca0d0d5e",
      //     dogName: "萨摩耶",
      //   },
      // ],
      // loveArr: []
      // arr: [{
      //   name: '好吃的口水鸡',
      //   price: 20,
      //   description: '开业大酬宾, 全场8折'
      // },
      //   {
      //     name: '好吃的水果',
      //     price: 50,
      //     description: '老板不在家, 全场6折'
      //   },
      //   {
      //     name: '好吃的冰淇淋',
      //     price: 10,
      //     description: '开业大酬宾, 全场8.8折'
      //   }
      // ]
    
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
