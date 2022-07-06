<template>
  <div>
    <p>邮箱</p>

    <slot name="email">
      <input type="text" placeholder="邮箱" />
    </slot>
    <br />
    <input type="text" placeholder="输入验证码" /><button>发送验证码</button
    ><br />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
