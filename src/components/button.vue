<template>
    <div>
        <button :class="`button-${type}`" @click="clickFn"> {{title}}</button>
    </div>
</template>
<script>


export default {
  props:{ 
title: 
 {
 type:String,
          default: () =>'主要按钮'
        },
       type:
        {
            type: String,
           default: () => 'primary',
           validator(val) { 
               return ['primary', 'success', 'danger', 'warning','info'].includes(val)
           }
        }
}, 
  components: {
  },
  data () {
    return {
    }
  },
    methods: {
        clickFn() { 
            this.$emit('myclick')
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
button {
    color: #fff;
    outline: none;
    border: none;
    padding: 8px 24px;
    border-radius: 4px;
    font-size: 18px;
          
}
  .button-primary {
      background-color: skyblue;
  }

  .button-success {
      background-color: greenyellow;
  }

  .button-danger {
      background-color: red;
  }

  .button-warning {
      background-color: yellow;
  }

  .button-info {
      background-color: antiquewhite
  }


</style>
