<template>
  <div>
    <div>时间：{{ 1636450540055 | time1("-") }}</div>
    <div>时间：{{ 1636450540055 | time1("/") }}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    time1(val, split) {
      return moment(val).format(`YYYY${split}MM${split}DD`);
    },
  },
};
</script>

<style></style>
