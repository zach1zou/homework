<template>
  <div>我是组件 B 来自a:{{ formA }}</div>
</template>

<script>
import EventBus from '@/EventBus/EventBus';
export default {
  data() {
    return {
      formA: "",
    };
  },
  created() {
    //接受传递过来的值
    EventBus.$on("aMsg", (val) => (this.formA = val));
  },
  methods: {},
};
</script>
