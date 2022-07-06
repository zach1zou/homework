<template>
  <div>
    <p>选择所在地区(实名认证主体所在地)❓</p>
    <slot name="from">
      <input type="radio" name="from" />中国大陆
      <input type="radio" name="from" />中国香港
    </slot>

    <p>手机号码</p>
    <input type="text" value="+86" style="width: 40px" disabled="true" />
    <slot name="phone">
      <input type="text" placeholder="请输入手机号码" />
    </slot>
    <br />
    <input type="text" placeholder="输入验证码" /><button>发送验证码</button
    ><br />
    <input type="password" placeholder="请输入密码" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 20px;
  color: rgb(126, 123, 123);
  margin-top: 10px;
}
button {
  background-color: #3ec1d3;
  border: none;
  border-radius: 3px;
}
input {
  margin-top: 10px;
}
</style>
