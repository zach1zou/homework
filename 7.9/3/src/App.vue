<template>
  <div>
    <MyHeader title="TAB栏"></MyHeader>
    <div style="margin-top: 45px">
      <!-- <component :is="comName"></component> -->
      <router-view></router-view>
    </div>
    <MyTabBar :arr="tabList" @changTab="changTabFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyTable from "./components/MyTable.vue";
import MyTabBar from "./components/MyTabBar.vue";

// import MyGoodsList from "./views/MyGoodsList.vue";
// import MyGoodsSearch from "./views/MyGoodsSearch.vue";
// import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  components: {
    MyHeader,
    MyTable,
    MyTabBar,
    // MyGoodsList,
    // MyGoodsSearch,
    // MyUserInfo,
  },

  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      /* comName: "MyGoodsList", */
    };
  },
  methods: {
    changTabFn(val) {
      /*  this.comName = { 0: "MyGoodsList", 1: "MyGoodsSearch", 2: "MyUserInfo" }[
        val
      ]; */
      if (val == 0) {
        this.$router.push({
          path: "/MyGoodsList",
        });
      } else if (val == 1) {
        this.$router.push({
          path: "/MyGoodsSearch",
        });
      } else {
        this.$router.push({
          path: "/MyUserInfo",
        });
      }
    },
  },
};
</script>

<style></style>
