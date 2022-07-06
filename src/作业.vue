<template>
  <div>
    <MyHeader title="购物车案例" backgroundColor="yellowgreen" color="yellow"></MyHeader>
    <div class="box">
      <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
    </div>
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
  </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  data() {
    return{
      list:[]
    }
  },
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  methods: {
    allFn(bool){
      this.list.forEach(obj => obj.goods_state = bool)
      // 把MyFooter内的全选状态true/false同步给所有小选框的关联属性上
    }
  },
  created() {
    this.$axios({
      url: '/api/cart',
      // parmas
    }).then(res => {
      console.log(res.data.list);
      this.list = res.data.list
    })
  },
  updated() {},
  mounted() {},
  filters: {},
  computed: {},
  watch: {},
};
</script>
<style lang="less" scoped>
.box{
margin-top: 45px;
}
</style>
