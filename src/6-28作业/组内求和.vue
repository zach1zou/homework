<!-- 组内求和 -->
<template>
  <div></div>
</template>

<script>
let arr = [{ a: 100 }, { a: 20 }, { a: -10 }];

let initialValue = 0;
let sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue.a,
  initialValue
);

console.log(sum);
export default {};
</script>

<style>
</style>