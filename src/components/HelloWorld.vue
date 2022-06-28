<template>
  <div>
    <span>选择所在的地区</span>
    <input type="radio" name="area" id="" value="1" v-model="area">中国大陆
    <input type="radio" name="area" id="" value="0" v-model="area">中国香港
    <br>
    <span>手机号码</span>
    <input type="number" name="" id="" v-model.number="iphone">
    <br>
    <span>年龄</span>
    <input type="number" name="" id="" v-model.number="age">
    <br>
    <span>密码</span>
    <input type="password" name="" id="" v-model="password">
    <br>
    <span>爱好</span>
    <input type="checkbox" name="" id="" value="吃饭" v-model="hobby">吃饭
    <input type="checkbox" name="" id="" value="睡觉" v-model="hobby">睡觉
    <input type="checkbox" name="" id="" value="打游戏" v-model="hobby">打游戏
    <br>
    <input type="checkbox" name="" id="" v-model="istrue"> <span>是否记住密码</span>
    <div class="group">
      <span>所在的地区:{{ { '1': '中国大陆', '0': '中国香港' }[area] }}</span>
      <br>
      <span>手机号码:{{ iphone }}</span>
      <br>
      <span>年龄:{{ age }}</span>
      <br>
      <span>密码:{{ password }}</span>
      <br>
      <span>爱好:{{ hobby.join() }}</span>
      <br>
      <span>是否记住密码:{{ istrue ? '是' : '否' }}</span>
    </div>

    <img src="../assets/库.jpg" alt="" @mouseover="changeImg(1)">
    <img src="../assets/框架.jpg" alt="" @mouseover="changeImg(2)">
    <img src="../assets/渐进式.png" alt="" @mouseover="changeImg(3)">
    <img :src="currentImg" alt="">
  </div>

</template>
<script>
import img1 from "../assets/库.jpg"
import img2 from "../assets/框架.jpg"
import img3 from "../assets/渐进式.png"

export default {
  props: [],
  components: {
  },
  data() {
    return {
      area: '1',
      iphone: '',
      age: '',
      password: '',
      hobby: ['吃饭'],
      istrue: true,
      currentImg: img1
    }
  },
  methods: {
    changeImg(num) {
      this.currentImg = { 1: img1, 2: img2, 3: img3 }[num]
    }
  },
  created() {

  },
  mounted() {

  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style  scoped>
.group {
  height: 200px;
  width: 200px;
  border: 1px solid red;

}

img {
  width: 500px;
  height: 400px;
}
</style>
