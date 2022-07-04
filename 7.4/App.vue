<template>
  <div>
    <input
      class="search"
      type="text"
      placeholder="搜索-书本名称"
      v-model.trim="searchStr"
      @keyup.enter="searchFn"
    />
    <tr>
      <th>序号</th>
      <th>书名</th>
      <th>作者</th>
      <th>出版商</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in list" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.bookname }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.publisher }}</td>
      <td>
        <a href="javascript:;" @click="delFn(item.id)">删除</a
        ><a href="javascript:;" @click="infoFn(item.id)">详情</a>
      </td>
    </tr>
    <div class="tips" v-if="flag">
      没有书籍 <button class="btn-return" @click="returnFn">返回~</button>
    </div>
    <addBook @listRender="listRenderFn"></addBook>
    <div>
      <p>书名:{{ infoShow.booknameShow }}</p>
      <p>作者:{{ infoShow.authorShow }}</p>
      <p>出版社:{{ infoShow.publisherShow }}</p>
    </div>
  </div>
</template>

<script>
import addBook from "./components/addBook.vue";
export default {
  components: {
    addBook,
  },
  data() {
    return {
      list: [],
      searchStr: "",
      flag: false,
      infoShow: {
        booknameShow: "",
        authorShow: "",
        publisherShow: "",
      },
    };
  },
  methods: {
    searchFn() {
      if (this.searchStr.length == 0) return alert("请输入书本名称球球了！");
      this.list = this.list.filter((item) => item.bookname == this.searchStr);
      this.searchStr = "";
      this.flag = true;
    },
    listRenderFn(val) {
      this.list = val;
    },
    returnFn() {
      this.$renderMyBook();
      this.flag = false;
    },
    //删除图书
    delFn(id) {
      this.$axios({
        method: "GET",
        url: "/api/delbook",
        params: { id },
      }).then((res) => {
        console.log(res);
        //刷新页面
        this.$renderMyBook();
      });
    },
    //获取详情
    infoFn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: { id },
      }).then((res) => {
        console.log(res);
        if (res.status !== 200) return alert("请求图书失败" + res.statusText);
        console.log(res.data.data.bookname);
        this.infoShow.booknameShow = res.data.data[0].bookname;
        this.infoShow.authorShow = res.data.data[0].author;
        this.infoShow.publisherShow = res.data.data[0].publisher;
      });
    },
  },
  created() {
    this.$axios({
      url: "/api/getbooks",
    }).then((res) => {
      if (res.status !== 200) return alert("请求图书失败" + res.statusText);
      this.list = res.data.data;
    });
  },
};
</script>

<style>
td,
th {
  border: 1px solid black;
}
a:nth-child(2) {
  margin-left: 50px;
}
.tips {
  width: 200px;
  background-color: #f38181;
}
.btn-return {
  margin-left: 50px;
  background-color: #ffb6b9;
}
</style>
