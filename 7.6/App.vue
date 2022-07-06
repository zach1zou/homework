<template>
  <div>
    <span :class="{ act: regBtn }" @click="regBtnFn">手机注册</span>
    <span :class="{ act: !regBtn }" @click="mailBtnFn">邮箱注册</span>
    <div style="margin-top: 50px; margin-left: 50px">
      <keep-alive>
        <component :is="comName">
          <template v-slot:from>
            <input type="radio" name="from" />中国大陆
            <input type="radio" name="from" />中国台湾
          </template>
          <template #phone> 也可自定义 </template>
          <template #email> 我也可以自定义</template>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import userPhone from "./components/userPhone.vue";
import userEmail from "./components/userEmail.vue";

export default {
  components: {
    userPhone,
    userEmail,
  },
  data() {
    return {
      //regBtn  为true为   手机注册  高亮
      regBtn: true,
      //comName  为component标签
      comName: "userPhone",
    };
  },
  methods: {
    regBtnFn() {
      this.regBtn = true;
      this.comName = "userPhone";
    },
    mailBtnFn() {
      this.regBtn = false;
      this.comName = "userEmail";
    },
  },
};
</script>

<style>
span {
  font-size: 50px;
  margin-left: 50px;
}
.act {
  border-bottom: 3px solid blue;
}
</style>
