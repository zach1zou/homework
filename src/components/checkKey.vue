<template>
  <div>
    <button v-btn-key="1">添加</button>
    <button v-btn-key="2">修改</button>
    <button v-btn-key="3">删除</button>
  </div>
</template>
<script>

export default {
  props:{ 

}, 
  components: {
  },
  data () {
      return {
        arr :[1, 3, 5, 7]
    }
  },
    methods: {
     
       
  },
    mounted() {
        sessionStorage.setItem
          ("permissionData", JSON.stringify(this.arr))
        // console.log(JSON.stringify(this.arr));
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
