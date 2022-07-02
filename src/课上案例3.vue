<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstName" />
      <span>名:</span>
      <input type="text" v-model="secName" />
      <span>姓名:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
  data() {
    return {
      firstName:"",
      secName:"",
    };
  },
  computed: {
    fullName: {
      // 给full赋值触发set方法
      set(val) {
        const arr = val.split('.');
        this.firstName=arr[0]||""
        this.secName=arr[1]||""
      },
      // 使用full的值触发get方法
      get() {
        return this.firstName? this.firstName+""+this.secName:"";
      },
    },

  },
};
</script>

<style>
</style>