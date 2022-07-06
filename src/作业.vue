<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-model="activePhone" label="手机注册" name="first"><phonenum></phonenum></el-tab-pane>
    <el-tab-pane v-model="activeTitle" label="邮箱注册" name="second"><Title></Title></el-tab-pane>
    </el-tabs>
</template>
<script>
import phonenum from "./components/phonenum.vue";
import Title from "@/components/Title.vue";
export default {
  data() {
    return {
      activePhone:"1",
      activeTitle:"2"
    };
  },
  components: {
    phonenum,
    Title,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>