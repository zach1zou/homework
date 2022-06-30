<template>
  <div>
    <ToggleTabVue></ToggleTabVue>
    <ShowgaoliangVue></ShowgaoliangVue>
    <GouwucheVue></GouwucheVue>
    <ketang></ketang>
    <ReduceVue></ReduceVue>
    <StrsolveVue></StrsolveVue>
    <HelloWorldVue></HelloWorldVue>

  </div>
</template>
<script>
import ToggleTabVue from './components/ToggleTab.vue'
import ShowgaoliangVue from './components/showgaoliang.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import ReduceVue from './components/reduce.vue'
import StrsolveVue from './components/strsolve.vue'
import Ketang from './components/liebiaoad.vue'
import GouwucheVue from './components/gouwuche.vue'
export default {
  props: [],
  components: {
    HelloWorldVue,
    ReduceVue,
    StrsolveVue,
    ShowgaoliangVue,
    Ketang,
    GouwucheVue,
    ToggleTabVue
    
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
