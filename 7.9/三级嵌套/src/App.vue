<template>
  <div>
    <router-link to="/UI_Router">UI_Router</router-link>
    <router-link to="/Contacts">Contacts</router-link>
    <router-link to="/About">About</router-link>
    <hr />
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

.router-link-active {
  color: red;
}
</style>
