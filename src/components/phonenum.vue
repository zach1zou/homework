<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <span
      >选择所在地区(实名认证主题所在地)<i class="el-icon-question"></i
    ></span>
    <br />
    <el-radio-group v-model="form.resource">
      <el-radio label="中国大陆"></el-radio>
      <el-radio label="中国香港"></el-radio>
      <el-radio label="中国台湾"></el-radio>
    </el-radio-group>
    <br />
    <el-form ref="form" :model="form" label-width="8px">
      <span>手机号码：</span>
      <br />
      <br />
      <el-input
        v-model="tel"
        type="tel"
        label="+86"
        style="width: 30%"
        placeholder="请输入手机号"
      ></el-input>
      <br />
      <el-input
        placeholder="请输入密码"
        v-model="input"
        show-password
        style="width: 22.7%"
      ></el-input
      ><el-button type="primary">发送验证码</el-button>
      <br />
      <span>登录密码：</span>
      <br />
      <br />
      <el-col>
        <el-input
          placeholder="请输入密码"
          v-model="input"
          show-password
          style="width: 30%"
        ></el-input>
        <br />
        <el-input
          placeholder="请再次输入密码"
          v-model="input"
          show-password
          style="width: 30%"
        ></el-input>
      </el-col>
      <br />
      <br /><br /><br />
      <span>邀请码(选填)：</span>
      <br />
      <br />
      <el-input
        v-model="input"
        placeholder="请输入内容"
        style="width: 30%"
      ></el-input>
      <br />
      <el-button type="primary"
        >提交<i class="el-icon-upload el-icon--right"></i
      ></el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        input: "",
      },
    };
  },

  // handleClose(done) {
  //   this.$confirm("确认关闭？")
  //     .then((_) => {
  //       done();
  //     })
  //     .catch((_) => {});
  // },
};
</script>