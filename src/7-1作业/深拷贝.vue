<template>
  <div></div>
</template>

<script type="text/javascript">
let a = {
  name: "sweetGirl",
  age: 18,
  sex: "女",
};
// 要求实现对象参数的深拷贝并返回拷贝之后的新对象
const _completeDeepClone = (target, map = new Map()) => {
  // 补全代码
  for (let target of map.entries()) {
    console.log(target[0], target[1]);
  }
};
_completeDeepClone(a);
</script>

<style></style>
