<template>
  <div>
        <p @click="getSomeValues()">点击统计{{str}}每个字符出现的次数</p>
        <ul v-for="(index,item) in arr" v-show="isshow">
          <li>{{item}}出现的次数是{{index}}</li>
          </ul>
  </div>
</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
      return {
        str: 'asadasfwedsaafrtrqr',
        isshow: false,
        arr:''
    }
  },
  methods: {
    getSomeValues() {
      let arr = this.str.split('')
      let count = arr.reduce((obj, index) => {
        if (index in obj) {
          obj[index]++
        } else {
          obj[index] = 1
        }
        return obj
      }, {})
      this.arr = count 
      this.isshow = !this.isshow
      
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
<style lang="less" scoped>

</style>
