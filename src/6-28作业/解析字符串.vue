<!-- 解析字符串 -->
<template>
  <div></div>
</template>

<script>
// http://www.baidu.com?name=zhangsan&age=18&sex=nan#
// 解析出
// {name: 'zhangsan',age: 18, sex: 'nan' }
let str = "http://www.baidu.com?name=zhangsan&age=18&sex=nan#";
let newStr = str.split("?").splice(-1, 1).join("#");
let arr = newStr.slice(0, newStr.length - 1).split("&");
let item = arr.forEach(function (item, index, ary) {
  item = item.replace("=", ":");
  console.log(item);
});

export default {};
</script>

<style>
</style>