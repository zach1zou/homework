<template>
    <div>

        <Table :arr="list">
            <template v-slot:age="scope">
                <input type="text" v-model="scope.row.age">
            </template>
            <template v-slot:touxiang="scope">
                <div v-if="scope.row.type==1">
                    <img style="width: 100px;" :src="scope.row.headImgUrl" alt="">
                </div>
                <div v-else-if="scope.row.type==0">
                    <a style="width: 100px;" :href="scope.row.headImgUrl" alt=""> </a>
                </div>
                <div v-else>
                    {{scope.row.headImgUrl}}
                </div>

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
         list:[]
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
