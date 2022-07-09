<template>
  <div>
    <router-link to="/index">首页</router-link>
    <router-link to="/Myclass">分类</router-link>
    <router-link to="/dingdan">订单</router-link>
    <router-link to="/my">我的</router-link>

    <p>↓切换！</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin-right: 10px;
}
</style>
