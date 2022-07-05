<template>
    <div class="my_div">
        <img :src="obj.dogImgUrl" alt="" />
        <p @click="btn" :style="{ backgroundColor:colorStr }">{{ obj.dogName }}</p>
    </div>

</template>
<script>
export default {
  props:{ obj: 
 {
 type:Object,
 default: () =>{}
    }, arr:
        {
            type: Array,
            default: () => []
        }
}, 
  components: {
  },
  data () {
      return {
          colorStr:'',
    }
  },
    methods: {
        btn() { 
            this.$parent.loveArr.push(this.obj.dogName) 
            this.colorStr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
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

.my_div {
    width: 200px;
    border: 1px solid black;
    text-align: center;
    float: left;
}

.my_div img {
    width: 100%;
    height: 200px;
}
</style>
