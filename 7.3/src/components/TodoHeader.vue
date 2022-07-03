<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addBtn"
      v-model.trim="ask"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      ask: "",
    };
  },
  methods: {
    addBtn() {
      if (this.ask.length == 0) return alert("请输入！");
      this.$emit("add", this.ask);
      this.ask = "";
    },
  },
  computed: {
    isAll: {
      get() {
        return this.$parent.list.every((item) => item.isDone);
      },
      set(bool) {
        this.$parent.list.forEach((item) => (item.isDone = bool));
      },
    },
  },
};
</script>
