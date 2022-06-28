<template>
  <div>
    <ReduceVue></ReduceVue>
    <StrsolveVue></StrsolveVue>
   

  </div>
</template>
<script>
import HelloWorldVue from './components/HelloWorld.vue'
import ReduceVue from './components/reduce.vue'
import StrsolveVue from './components/strsolve.vue'

export default {
  props: [],
  components: {
    HelloWorldVue,
    ReduceVue,
    StrsolveVue
    
},
  data () {
    return {
    }
  },
  methods: {
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
