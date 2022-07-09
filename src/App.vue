<template>
  <div>

    <MyHeader :title="title">
    </MyHeader>
    <div style="margin-top:45px">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @changeCom="changeComFn"></MyTabBar>
  
  </div>
</template>
<script>

import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyTable from './components/MyTable.vue'


import MyGoodsList from './views/MyGoodsList'
import MyGoodsSearch from './views/MyGoodsSearch'
import MyUserInfo from './views/MyUserInfo'
export default {
  props:{ 

}, 
  components: {
    MyHeader,
    MyTabBar,
    MyTable,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
 
},
  data () {
    return {
      title: "My Header",
      comName:'MyGoodsList',
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ]
    }
  },
  methods: {
    changeComFn(componentName) { 
      this.comName = componentName
    }
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
