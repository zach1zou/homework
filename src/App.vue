<template>
  <div>
    <MyHeader title="购物车案例" backgroundColor="red"></MyHeader>
    <div style="margin-top:45px"></div>
    <MyGood v-for="(item,index) in list" :key="item.id" :obj="item"></MyGood>
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGood from './components/MyGood.vue';
import MyFooter from './components/MyFooter.vue';



export default {

  components: {
    MyHeader,
    MyGood,
    MyFooter
  }, data() {
    return {
      list: [] // 商品所有数据
    }
  }, methods: {
    allFn(bool) {
      this.list.forEach(obj => obj.goods_state = bool)
      // 把MyFooter内的全选状态true/false同步给所有小选框的关联属性上
    }
  },
   created() { 
    this.$axios({
      url: "/api/cart"
    }).then(res => { 
      // console.log(res);
      this.list = res.data.list
    })
     
  }
}
</script>

<style>

</style>
