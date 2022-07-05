<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ description }}</p>
        <button @click="change">砍一刀</button>
    </div>
</template>
<script>


export default {
  props: ['title','price','description','ind'],
  components: {
  },
  data () {
      return {
        
    }
  },
    methods: {
        change() { 
           console.log(this.ind);
            this.$emit('changeFn', this.ind) 
        }
    
  },
  created () {
  },
  updated () {
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
<style>

.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
