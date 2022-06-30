<template>
  <div>
    <div>{{msg}}</div>
    <button @click="fn">翻转世界</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "HELLO,VUE"
    }
  },
  methods: {
    fn() {
      this.msg = this.msg.split("").reverse().join("")
    }
  }
}
</script>

<style>

</style>