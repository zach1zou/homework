<template>
  <input type="text" v-bind:value="msg" @input="fn" />
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    fn(e) {
      this.msg = e.target.value;
    },
  },
};
</script>

<style></style>
