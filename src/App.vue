<template>
  <div class="todoapp">
    <Header :arr="list"></Header>
    <Main :arr="isll"></Main>
    <Footer :arr="list" @filterFn="showArr"></Footer>
  </div>
</template>
<script>
import '../src/assets/styles/base.css'
import '../src/assets/styles/index.css'
import Header from './components/TodoHeader.vue'
import Main from './components/TodoMain.vue'
import Footer from './components/TodoFooter.vue'
export default {
  props:{ arr: 
 {
 type: Array,
 default: () =>[]
} 
}, 
  components: {
    Header,
    Main,
    Footer
  },
  data () {
    return {
      list: JSON.parse(localStorage.getItem('todoList')) ||[ ],
      isSel: 'all',
    }
  },
  methods: {
    showArr(val) {
      this.isSel = val
      console.log(this.isSel);
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
    isll() {
      if (this.isSel == 'yes') { // 显示已完成
        return this.list.filter(obj => obj.isDone === true)
      } else if (this.isSel == 'no') { // 显示未完成
        return this.list.filter(obj => obj.isDone === false)
      } else {
        return this.list // 全部显示
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        // 8.0 只要list变化 - 覆盖式保存到localStorage里
        localStorage.setItem('todoList', JSON.stringify(this.list))
      }
    }
  },
}
</script>
<style lang="less" scoped>

</style>

