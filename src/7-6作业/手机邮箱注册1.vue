<template>
  <div>
    <!-- 头部,公共部分 -->
    <header>
      <div>
        <a href="#" @click="comName = 'phoneReg'">手机注册</a>
        <a href="#" @click="comName = 'emailReg'">邮箱注册</a>
      </div>
      <p>选择所在地区（实名认证主体所在地）</p>
      <input
        type="checkbox"
        name="place1"
        id="place1"
        value="中国大陆"
        checked
      />中国大陆
      <input
        type="checkbox"
        name="place2"
        id="place2"
        value="中国香港"
      />中国香港
    </header>
    <!-- 不同区域 -->
    <body>
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </body>
    <!-- 尾部,公共部分 -->
    <footer>
      <input type="text" name="code1" id="code1" placeholder="输入验证码" />
      <input type="button" value="发送验证码" /><br />
      <p>登录密码</p>
      <input
        type="password"
        name="pwd1"
        id="pwd1"
        placeholder="输入登录密码"
      /><br />
      <input
        type="password"
        name="pwd2"
        id="pwd2"
        placeholder="再次输入登录密码"
      />
      <p>邀请码（选填）</p>
      <input
        type="text"
        name="code2"
        id="code2"
        placeholder="输入客户经理邀请码"
      />
    </footer>
  </div>
</template>

<script>
import phoneReg from "../components/手机注册.vue";
import emailReg from "../components/邮箱注册.vue";
export default {
  components: {
    phoneReg,
    emailReg,
  },
};
</script>

<style>
</style>