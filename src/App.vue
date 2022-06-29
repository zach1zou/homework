<!-- http://www.baidu.com?name=zhangsan&age=18&sex=nan#
解析出
 {name: 'zhangsan',age: 18, sex: 'nan' } -->

<template>
	
	<div></div>
</template>

<script>
let str = 'http://www.baidu.com?name=zhangsan&age=nan&sex=nan#';
function getUrl(str) {
	console.log(str);
	console.log(str.indexOf('?'));
	console.log(str.indexOf('#'));
	console.log(str.slice(21, 50));
	console.log(str.slice(21, 50).split('&'));
	var newStr = str.slice(str.indexOf('?') + 1, str.indexOf('#')).split('&'); // console.log(newStr);
	const obj = {};
	newStr.forEach((item) => {
		console.log(item);
		const [key, val] = item.split('=');
		console.log([key, val]);
		obj[key] = val;
	});
	return obj;
}
getUrl(str);
console.log(getUrl(str));
export default {};
</script>

<style></style>
