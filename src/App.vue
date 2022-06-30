<template>
  <div>
    <ToggleTabVue> </ToggleTabVue>


    <ShowgaoliangVue></ShowgaoliangVue>
    <studentInfoManageVue></studentInfoManageVue>
    <GouwucheVue></GouwucheVue>
    <ketang></ketang>
    <ReduceVue></ReduceVue>
    <StrsolveVue></StrsolveVue>


  </div>
</template>
<script>
import studentInfoManageVue from './components/studentInfoManage.vue'
import ToggleTabVue from './components/ToggleTab.vue'
import ShowgaoliangVue from './components/showgaoliang.vue'

import ReduceVue from './components/reduce.vue'
import StrsolveVue from './components/strsolve.vue'
import Ketang from './components/liebiaoad.vue'
import GouwucheVue from './components/gouwuche.vue'
export default {
  props: [],
  components: {
 
    ReduceVue,
    StrsolveVue,
    ShowgaoliangVue,
    Ketang,
    GouwucheVue,
    ToggleTabVue,
    studentInfoManageVue
    
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
