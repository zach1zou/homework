<template>
  <div>
        <p>{{str}}解析</p>
        <p @click="solve()">点击解析后结果</p>

  </div>
</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
      return {
          str: 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#',
          obj: {}
}
    }
  ,
    methods: {
        solve() { 
            let index = this.str.indexOf('?')
            let lastIndex=this.str.lastIndexOf('#')
            // console.log(index);  
            let str = this.str.slice(index + 1, lastIndex)
            // console.log(str);
            if ((str.indexOf('=')) !== -1) { 
                for (let i = 0;i<str.length;i++) { 
                    str = str.replace('=', ':')
                }     
            }
            // console.log(str);
            let arr = str.split('&')
          
            let arrJson = JSON.stringify(arr);
            console.log(arrJson );
            arrJson = JSON.parse(arrJson);
         console.log(arrJson);
      
            
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
