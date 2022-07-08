<template>
  <div>
    <Pannel>
      <template #title>
        <p>手机号码</p>
      </template>
      <template v-slot="content">
        <input type="text" id="phone" placeholder="输入手机号码" />
      </template>
    </Pannel>
  </div>
</template>

<script>
import Pannel from "./手机注册.vue";
export default {
  components: {
    Pannel,
  },
};
</script>

<style>
</style>