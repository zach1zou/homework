<template>
    <div>
        国内 {{ msg | deal }}
        <br>
        国外 {{ msg | deal1 }}
        <br>
        时间戳{{date|data}}
        <br>
        时间戳{{ date | data | data1 }}
    </div>
</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
      return {
          msg: '187654321',
          date:1636450540055
    }
  },
    methods: {
    
  },
  created () {
  },
  updated () {
  },
  mounted () {
  },
    filters: {
        deal(val) { 
            const first = val.substring(0, 4)
               
            const second = val.substring(4, val.length)
            const complate = first + '.' + second+'千'
             return complate
        },
        deal1(val) {
            const first = val.substring(0, 3)

            const second = val.substring(3, val.length)
            const complate = first + '.' + second + '万'
            return complate
        },
        data(val) {
            const date=new Date(val)
            const y = date.getFullYear()
            const m = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
            const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
            return y+'-'+m+'-'+d
        },
        data1(val) { 
            for (let i = 0; i < val.length; i++) { 
              val= val.replace('-', '/')
            }
            return val
        }
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
