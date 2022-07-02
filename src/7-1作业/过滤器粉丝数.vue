<template>
  <div>
    <p>国内网站粉丝数量：{{ ["1876986", 0] | getFans }}</p>
    <p>国外网站粉丝数量：{{ ["1876986", 1] | getFans }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  filters: {
    getFans(val) {
      if (val[1] == 0) {
        return val[0] / 10000 + "万";
      } else {
        return val[0] / 1000 + "千";
      }
    },
  },
};
</script>

<style>
</style>