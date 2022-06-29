<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/023b5bb5c9ea15ceffb53cfc5a8c80fa3b87b207.jpeg"
        alt=""
        @mouseenter="fn(1)" @click="fn1($event)"
      />
      <img
        src="./assets/ee9a0a55b319ebc4bf115a48c726cffc1f171624.jpg"
        alt=""
        @mouseenter="fn(2)" @click="fn1($event)"
      />
      <img
        src="./assets/微信图片_20220619143048.png"
        alt=""
        @mouseenter="fn(3)" @click="fn1($event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="srcBIG" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img1 from './assets/023b5bb5c9ea15ceffb53cfc5a8c80fa3b87b207.jpeg';
import img2 from './assets/ee9a0a55b319ebc4bf115a48c726cffc1f171624.jpg';
import img3 from './assets/微信图片_20220619143048.png';

export default {
  data() {
    return {
      obj: {
        1: img1,
        2: img2,
        3: img3,
      },
      srcBIG: img1,
    };
  },
  methods: {
    fn(val) {
      this.srcBIG = this.obj[val];
    },
    fn1(e) {
      alert(e.target.src);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
