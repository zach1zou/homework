<template>
  <div>
    <Pannel1>
      <template #scope>
        <p>{{ scope.row.title }}</p>
      </template>
    </Pannel1>
    <Pannel1>
      <template #scope>
        <!-- <input
          type="text"
          name="phone"
          id="phone"
          placeholder="{{scope.row.content}}"
        /> -->
      </template>
    </Pannel1>
  </div>
</template>

<script>
import Pannel1 from "../7-6作业/手机邮箱注册2.vue";

export default {
  data() {
    return {};
  },
  components: {
    Pannel1,
  },
};
</script>

<style>
</style>