<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstName" />
      <br />
      <span>名:</span>
      <input type="text" v-model="secName" />
      <br />
      <span>全称:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      secName: "",
    };
  },

  computed: {
    fullName: {
      set(val) {
        const arr = val.split(".");
        this.firstName = arr[0] || "";
        this.secName = arr[1] || "";
      },
      get() {
        return this.firstName ? this.firstName + "." + this.secName : "";
      },
    },
  },
};
</script>

<style>
</style>