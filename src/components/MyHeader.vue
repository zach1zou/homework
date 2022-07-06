<template>

  <div class="my-header" :style="{ backgroundColor: backgroundColor } ">{{title}}</div>

</template>
<script>
export default {
  props:{ 
title: 
 {
 type: String,
 required:true
} ,
backgroundColor: 
 {
 type: String,
 default:'white'
} 
}, 
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
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
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
