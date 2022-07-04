<template>
  <div>
    <input type="text" placeholder="书名" v-model.trim="obj.bookname" /> <br />
    <input type="text" placeholder="作者" v-model.trim="obj.author" /><br />
    <input
      type="text"
      placeholder="出版社"
      v-model.trim="obj.publisher"
    /><br />
    <button @click="addFn" ref="addbtn">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    addFn() {
      this.$refs.addbtn.disabled = true;
      if (
        this.obj.bookname.length == 0 ||
        this.obj.author == 0 ||
        this.obj.publisher.length == 0
      )
        return alert("球球了添加图书也要打字啊！");

      //发送请求添加图书
      this.$axios({
        method: "POST",
        url: "/api/addbook",
        data: this.obj,
      }).then((res) => {
        //发送获取图书列表，刷新页面
        this.$axios({
          url: "/api/getbooks",
        }).then((res) => {
          if (res.status !== 200) {
            this.$refs.addbtn.disabled = false;
            return alert("请求图书失败" + res.statusText);
          }
          //发送给父亲
          this.$emit("listRender", res.data.data);
          (this.obj.bookname = ""),
            (this.obj.author = ""),
            (this.obj.publisher = "");
          this.$refs.addbtn.disabled = false;
        });
      });
    },
  },
};
</script>

<style></style>
