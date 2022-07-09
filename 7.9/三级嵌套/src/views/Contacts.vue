<template>
  <div>
    <ul>
      <li>
        <router-link to="/Contacts/All_contacts">All_contacts</router-link>
      </li>
      <li><router-link to="/Contacts/Alice">Alice</router-link></li>
      <li><router-link to="/Contacts/Bob">Bob</router-link></li>
    </ul>
    <button @click="btn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      const index = Math.floor(Math.random() * 3);
      const path = {
        0: "/Contacts/All_contacts",
        1: "/Contacts/Alice",
        2: "/Contacts/Bob",
      }[index];
      this.$router
        .push({
          path,
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
