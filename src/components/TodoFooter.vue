<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{count}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: Sel === 'all'}" href="javascript:;" @click="isSel('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: Sel === 'no'}" href="javascript:;" @click="isSel('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: Sel === 'yes'}" href="javascript:;" @click="isSel('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>
<script>
export default {
  props:{ arr: 
 {
 type: Array,
 default: () =>[]
} 
}, 
  components: {
  },
  data () {
    return {
      Sel: "all"
    }
  },
  methods: {
    isSel(val) { 
      this.Sel = val
      this.$emit('filterFn', val);
    },
    clear() { 
      this.$parent.list= this.arr.filter(obj => obj.isDone == false)
      
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
    count() { 
      return this.arr.filter((ele) => ele.isDone == false).length
    },
   
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
