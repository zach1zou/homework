<template>
  <div class="my_div">
    <img :src="dog.dogImgUrl" alt="" />
    <p :style="{ background: myColor }" @click="selectFn(dog.dogName)">
      {{ dog.dogName }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myColor: "",
    };
  },
  props: {
    dog: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    selectFn(val) {
      this.myColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      this.$emit("dogSel", val);
    },
  },
};
</script>

<style scoped>
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
