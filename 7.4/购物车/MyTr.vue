<template>
  <tr>
    <td><input type="checkbox" v-model="list.checked" /></td>
    <td>{{ list.name }}</td>
    <td>{{ list.price }}</td>
    <td>
      <button @click="jianBtn">-</button>{{ list.num
      }}<button @click="jiaBtn">+</button>
    </td>
    <td>{{ list.num * list.price }}</td>
    <td><button @click="delFn(list.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    jianBtn() {
      if (this.list.num == 0) return;
      this.list.num--;
    },
    jiaBtn() {
      this.list.num++;
    },
    delFn(val) {
      const index = this.$parent.goodList.findIndex((item) => item.name == val);
      this.$parent.goodList.splice(index, 1);
    },
  },
};
</script>

<style></style>
