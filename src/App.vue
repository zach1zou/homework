<template>
  <div>
    <p>国内粉丝数量：{{ fansnum|fansmat }}</p>
    <p>国外粉丝数量：{{ fansnum|fassmat }}</p>
    <span>时间：{{ time | format }}</span>
    <br />
    <span>时间：{{ time | forsmat }}</span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      time: 1636450540055,
      fansnum: 1876986,
    };
  },
  filters: {
    format(val) {
      return moment(val).format("YYYY-MM-DD");
    },
    forsmat(val) {
      return moment(val).format("YYYY/MM/DD");
    },
    fansmat() {
      return (1876986/10000+'万')
    },//国内
    fassmat() {
      return (1876986/1000+'千')
    },//国外
  },
};
</script>

<style>
</style>