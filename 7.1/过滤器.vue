<template>
  <div>
    <div>国内网站：粉丝数量：{{ 1876986 | res(10000, "万") }}</div>
    <div>外国网站：粉丝数量：{{ 1876986 | res(1000, "千") }}</div>
  </div>
</template>

<script>
export default {
  filters: {
    res(val, num, str) {
      return val / num + str;
    },
  },
};
</script>

<style></style>
