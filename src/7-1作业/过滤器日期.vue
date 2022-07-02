<template>
  <div>
    <p>时间：{{ time | getTime("-") }}</p>
    <p>时间：{{ time | getTime("/") }}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      time: 1636450540055,
    };
  },
  methods: {},
  filters: {
    getTime(val, split) {
      return moment(val).format(`YYYY${split}MM${split}DD`);
    },
  },
};
</script>

<style>
</style>