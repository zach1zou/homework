<template>
    <div>
        <p>1. 获取所有图书信息</p>
        <p>2. 查询某本书籍信息</p>
        <input type="text" placeholder="请输入要查询 的书名" v-model="bName" />
        <button @click="findFn">查询</button>

        <p>3. 新增图书信息</p>
        <div>
            <input type="text" placeholder="书名" v-model="bookObj.bookname">
        </div>
        <div>
            <input type="text" placeholder="作者" v-model="bookObj.author">
        </div>
        <div>
            <input type="text" placeholder="出版社" v-model="bookObj.publisher">
        </div>
        <button @click="sendFn">发布</button>
    </div>
</template>
<script>

export default {
  props:{ 
arr: 
 {
 type: Array,
 default: () =>[]
} ,
obj: 
 {
 type: Object,
 default: () =>{}
} 
}, 
  components: {
  },
  data () {
      return {
          bName: '',
          bookObj: { // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
              bookname: "",
              author: "",
              publisher: ""
          }
    }
  },

    methods: {
        findFn() {
           this.$http({
                url: "/api/getbooks",
                method: "GET",
                params: { // 都会axios最终拼接到url?后面
                    bookname: this.bName
                }
            }).then(res => {
                console.log(res);
            })
        },
        sendFn() {
            this.$http({
                url: "/api/addbook",
                method: "POST",
                data: {
                    appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
                    // ...this.bookObj
                    // 等同于下面
                    bookname: this.bookObj.bookname,
                    author: this.bookObj.author,
                    publisher: this.bookObj.publisher
                }
            }).then((res) => {
                const { data } = res
                console.log(data);
            });
        }
 
           
        },

    created() { },
    mounted() {
        this.$http({
            url: "/api/getbooks",
            method: "GET", // 默认就是GET方式请求, 可以省略不写
        }).then((res) => {
            const { data } = res
          
            console.log(data);
        });
                // axios()-原地得到Promise对象
  },
  updated () {
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
