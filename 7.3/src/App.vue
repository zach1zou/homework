<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="listShow" @del="delFn"></TodoMain>
    <TodoFooter
      :list="list"
      @changeStatus="changeStatusFn"
      @delSel="delSelFn"
    ></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./style/index.css";
import "./style/base.css";

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      /* list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ], */
      list: JSON.parse(localStorage.getItem("list")),
      isSel: "all",
    };
  },
  methods: {
    addFn(val) {
      let id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    delFn(id) {
      let index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    changeStatusFn(val) {
      this.isSel = val;
    },
    delSelFn() {
      this.list = this.list.filter((item) => item.isDone == false);
    },
  },
  computed: {
    listShow() {
      if (this.isSel == "yes") {
        return this.list.filter((item) => item.isDone == true);
      } else if (this.isSel == "no") {
        return this.list.filter((item) => item.isDone == false);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []));
      },
    },
  },
};
</script>
