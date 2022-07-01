<template>
  <div>
    <div v-for="item in arr" :key="item">
      {{ item }} <input type="checkbox" :value="item" v-model="currentArr" />
    </div>
    <p>你选中的元素, 累加的值和为:{{ sumCompute }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      currentArr: [],
    };
  },
  computed: {
    sumCompute() {
      return this.currentArr.reduce((sum, item) => sum + item, 0);
    },
  },
};
</script>

<style></style>
