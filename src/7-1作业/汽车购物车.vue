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
      <!-- <tr>
        <td><input type="checkbox" /></td>
        <td>商品</td>
        <td>单价</td>
        <td><span>-</span><input type="text" /><span>+</span></td>
        <td>小记</td>
        <td><button>删除</button></td>
      </tr> -->
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.flag" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="reduceFn(index)">--</span
          ><input type="text" v-model.number="item.count" /><span
            @click="addFn(index)"
            >++</span
          >
        </td>
        <td>{{ item.note }}</td>
        <td>
          <button @click="deleteFn(index)">删除</button>
        </td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="clearFn">删除选中商品</button>
    <button @click="clearAllFn">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p v-for="item in list" :key="item">
        已经选中{{ item.name }}辆数{{ item.count }}
      </p>
      <p>总价{{ allPrice }}万</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0,
      list: [
        {
          id: 1,
          name: "奔驰",
          price: 41,
          note: "C260",
          flag: false,
          count: 0,
        },
        {
          id: 2,
          name: "宝马",
          price: 20,
          note: "X5",
          flag: false,
          count: 0,
        },
        {
          id: 3,
          name: "奥迪",
          price: 33,
          note: "A6L",
          flag: false,
          count: 0,
        },
      ],
    };
  },
  methods: {
    reduceFn(index) {
      this.list[index].count > 0 ? this.list[index].count-- : 0;
    },
    addFn(index) {
      this.list[index].count++;
    },
    deleteFn(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    clearFn() {
      this.list = this.list.filter((val) => {
        return val.flag == false;
      });
    },
    clearAllFn() {
      this.list.splice(0, 3);
    },
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((ele) => (ele.flag = val));
      },
      get() {
        return this.list.every((ele) => ele.flag);
      },
    },
    allPrice() {
      return this.list.reduce((sum, obj) => {
        return (sum += obj.price * obj.count);
      }, 0);
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
