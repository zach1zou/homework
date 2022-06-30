<!-- 字母出现次数 -->
<template>
  <div></div>
</template>

<script>
let str = "abcdebabdgvgav";
let arr = str.split("");
let countedChar = arr.reduce(function (allChars, char) {
  if (char in allChars) {
    allChars[char]++;
  } else {
    allChars[char] = 1;
  }
  return allChars;
}, {});
console.log(countedChar);
// -------------------------------------------
const info = arr.reduce((pre, next) => {
  pre[next] ? pre[next]++ : (pre[next] = 1);
  return pre;
}, {});
console.log(info);
export default {};
</script>

<style>
</style>