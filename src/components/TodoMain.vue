<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="(item,index) in arr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>

</template>
<script>
export default {
  props: {
    arr: 
 {
 type: Array,
 default: () =>[]
} 
}, 
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    del(id) { 
      
      let index = this.arr.findIndex((val) => { val.id == id })
      
      this.arr.splice(index,1)
    }
  },
  created () {
  },
  mounted () {
  },
  updated () {
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
