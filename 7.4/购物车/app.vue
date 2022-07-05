<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyTr v-for="item in goodList" :key="item.name" :list="item"></MyTr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计件数：{{ count }}</td>

          <td colspan="5">{{ priceAll }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyTr from "./components/MyTr.vue";
export default {
  components: {
    MyTr,
  },
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      get() {
        return this.goodList.every((item) => item.checked);
      },
      set(val) {
        this.goodList.forEach((item) => (item.checked = val));
      },
    },
    count() {
      return this.goodList.reduce((sum, item) => sum + item.num, 0);
    },
    priceAll() {
      return this.goodList.reduce(
        (sum, item) => sum + item.num * item.price,
        0
      );
    },
  },
};
</script>

<style></style>
