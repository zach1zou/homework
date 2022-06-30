<template>
  <div>
    <ul>
      <li
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in navs"
        :key="index"
        @click="changeFn(index)"
      >
        大学起点
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["大学起点", "高中起点", "初中起点", "小学起点"],
      currentIndex: 0,
    };
  },
  methods: {
    changeFn(index) {
      this.currentIndex = index;
    },
  },
};
</script>


<style>
</style>