<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus @keydown.enter="add" v-model="val" />
  </header>
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
      val:''
    }
  },
  methods: {
    add() {
     const id= this.arr[this.arr.length - 1] ? this.arr[this.arr.length- 1].id + 1 : 100
      this.arr.push(
        {
          id: id,
          name: this.val,
          isDone:false
        }
      )
      this.val = ''
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
    isAll: {
      set(checked) {
        this.$parent.list.forEach((ele) => {
          return ele.isDone = checked
        })
      },
      get() {
        return this.$parent.list.every((ele) => {
          return ele.isDone = true
        })
      }
    }
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
