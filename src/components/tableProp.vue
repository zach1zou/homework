<template>
    <div>

        <Table :arr="list">
            <template v-slot:age="scope">
                <input type="text" v-model="scope.row.age">
            </template>
            <template v-slot:touxiang="scope">
                <img style="width: 100px;" :src="scope.row.headImgUrl" alt="">
            </template>
        </Table>
    </div>
</template>
<script>
import Table from './table.vue'
export default {
  components: {
    Table
  },
  data () {
      return {
          list: [
              {
                  name: "小传同学",
                  age: 18,
                  headImgUrl:
                      "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
              },
              {
                  name: "小黑同学",
                  age: 25,
                  headImgUrl:
                      "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
              },
              {
                  name: "智慧同学",
                  age: 21,
                  headImgUrl:
                      "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
              },
          ],
    }
  },
  methods: {
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
