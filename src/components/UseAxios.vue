<template>
  <div id="app">
    <div>
      <button @click="getAllFn">显示-书本信息</button>
      <br />
      <input type="text" placeholder="搜索-书本名称" v-model="id" />
      <button @click="findFn(id)">查询</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
        <tr></tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <a href=" " @click="deleteFn(item.id)">删除</a>
            <a href="#" @click="findFn">详情</a>
          </td>
          <td v-if="item.length <= 0" colspan="5" style="text-align: center">
            暂无数据
          </td>
        </tr>
      </table>
    </div>
    <div>
      <input type="text" placeholder="序号" v-model="id" />
    </div>
    <div>
      <input type="text" placeholder="书名" v-model="bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="publisher" />
    </div>

    <button @click="sendFn">新增</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      id: "",
      bookname: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    getAllFn() {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
      }).then((res) => {
        // console.log(res);
        this.list = res.data.data;
      });
    },
    findFn() {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
        params: {
          id: this.list.bookname,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    sendFn() {
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          // ...this.bookObj,
          id: this.list.id,
          bookname: this.list.bookname,
          author: this.list.author,
          publisher: this.list.publisher,
        },
      });
    },
    deleteFn(id) {
      this.$axios({
        url: "/api/delbook",
        method: "GET",
        params: {
          id: this.list.id,
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
        },
      });
    },
  },
};
</script>
<style scoped>
td,
th {
  border: 1px solid black;
}

a:nth-child(2) {
  margin-left: 5px;
}

button {
  background-color: blue;
  color: aliceblue;
}
</style>