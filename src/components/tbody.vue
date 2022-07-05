<template>
    <tr>
        <td><input type="checkbox" name="" id="" v-model="obj.checked"></td>
        <td>{{ obj.name }}</td>
        <td>{{ obj.price}}</td>
        <td><button @click="obj.num--">-</button>{{ obj.num}}
        <button @click="obj.num++">+</button></td>
        <td>{{ obj.price * obj.num}}</td>
        <td><button @click=" del(obj.name)">删除</button></td>
    </tr>
</template>
<script>
export default {
  props:{ 
arr: 
 {
 type: Array,
 default: () =>[]
} ,
obj: 
 {
 type: Object,
 default: () =>{}
} 
}, 
  components: {
  },
  data () {
    return {
    }
  },
    methods: {
        del(val) { 
            const index = this.$parent.goodList.findIndex((ele) =>ele.name==val)
            this.$parent.goodList.splice(index, 1)
            
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
