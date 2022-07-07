<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope. row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input type="text" class="tag-input form-control" style="width: 100px" v-if="scope.row.Visible" v-focus
            @blur="scope.row.Visible = false" v-model="scope.row.inputValue" @keydown.enter="enterFn(scope.row)" />
          <button class="btn btn-primary btn-sm add-tag" v-else @click="scope.row.Visible=true">+Tag</button>
          <span v-for="(item, index) in scope.row.tags" :key="index" class="badge badge-warning"
            style="margin-right:15px">
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="DelFn(scope.row.id)">删除</button>
        </td>
      </template>

    </MyTable>
  </div>
</template>
<script>
import MyTable from '@/components/MyTable.vue'
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
    MyTable
},
  data () {
    return {
      list: []
    }
  },
  methods: {
    getlist() { 
      this.$http({
        url: "/api/goods",
      }).then((res) => {
        // console.log(res);
        res.data.data.forEach(ele => ele.Visible=false)
        this.list = res.data.data;
      });
    },
    DelFn(id) { 
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    },
    enterFn(obj) {
      // console.log(obj);
      if (obj.inputValue.trim().length <= 0) {
        return alert('请输入数据')
       }
      obj.tags.push(obj.inputValue);
      obj.inputValue=''
     }
  },
  created() {
   this.getlist() 
  },
  mounted () {
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
