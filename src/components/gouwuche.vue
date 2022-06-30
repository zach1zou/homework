<template>
  <div>
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.time }}</td>
        <td>
          <button @click="del(item.id)">删除</button>
        </td>
      </tr>
      <tr v-if="list.length == 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
      return {
          list: [
              { id: 1, name: "奔驰", time: "2020-08-01" },
              { id: 2, name: "宝马", time: "2020-08-02" },
              { id: 3, name: "奥迪", time: "2020-08-03" },
          ],
    }
  },
    methods: {
        del(id) { 
            const index = this.list.findIndex((val) => {
                return val.id == id;
            })
             this.list.splice(index, 1);
        }
  },
  created () {
  },
  mounted () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style scoped>



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
