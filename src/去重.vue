<template></template>

<script>
var str = 'abcoefoxyozzopp';
const res1 = str.split('').reduce((pre, cur) => {
	pre[cur] ? pre[cur]++ : (pre[cur] = 1);
	return pre;
}, {});
console.log(res1);
let arr = [];
let num = Math.max(...new Set(Object.values(res1)));
let value;
for (let keys in res1) {
	if (res1[keys] == num) {
		value = keys;
		break;
	}
}
console.log(`出现最多的字母为${value},出现的次数为${num}次`);
</script>

<style></style>
