<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.check" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span>-</span
          ><input type="text" v-model.number.trim="item.count" /><span>+</span>
        </td>
        <td>{{ item.time }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delSelect">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品{{ countSelect }}件</p>
      <p>总价{{ priceAll }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          check: false,
          name: "奔驰",
          price: 100000,
          count: 0,
          time: "2020-08-01",
        },
        {
          id: 2,
          check: false,
          name: "宝马",
          price: 200000,
          count: 0,
          time: "2020-08-02",
        },
        {
          id: 3,
          check: false,
          name: "奥迪",
          price: 300000,
          count: 0,
          time: "2020-08-03",
        },
      ],
      check: [],
    };
  },
  methods: {
    del(ipt) {
      // 删除按钮 - 得到索引, 删除数组里元素，选择id因为以后对接服务器
      const index = this.list.findIndex((item) => item.id == ipt);
      this.list.splice(index, 1);
    },
    delSelect() {
      //根据选中数量循环删除
      let num = 0;
      this.list.forEach((item) => {
        if (item.check) {
          num++;
        }
      });
      for (let i = 0; i < num; i++) {
        const index = this.list.findIndex((item) => item.id == true);
        this.list.splice(index, 1);
      }
    },
    delAll() {
      //赋予空数组清空购物车
      this.list = [];
    },
  },
  computed: {
    isAll: {
      //选中框操作
      get() {
        return this.list.every((item) => item.check);
      },
      set(val) {
        this.list.forEach((item) => (item.check = val));
      },
    },
    countSelect() {
      let num = 0;
      this.list.forEach((item) => {
        if (item.check) {
          num++;
        }
      });
      return num;
    },
    priceAll() {
      let price = 0;
      this.list.forEach((item) => {
        if (item.check) {
          price += item.price;
        }
      });
      return price;
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
