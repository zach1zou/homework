<template></template>

<script>
//  reduce 方法
let arr = [{ a: 100 }, { a: 20 }, { a: -10 }];
const sum = arr.reduce((val, ind) => {
	return val + ind.a;
}, 0);
console.log(sum);
</script>

<style></style>
