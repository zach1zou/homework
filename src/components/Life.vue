<template>
	<div>
		<p>学习生命周期 - 看控制台打印</p>

		<p id="myP">{{ msg }}</p>

		<ul id="myUL">
			<li v-for="item in arr" :key="item">{{ item }}</li>
		</ul>
		<button @click="arr.push(1000)">点击末尾加值</button>
	</div>
</template>

<script>
export default {
	name: 'LifeAxiosLife',

	data() {
		return {
			msg: 'shangshanxiaobao',
			arr: [1, 6, 9, 2],
			tite: null,
		};
	}, // 创建阶段 // beforeCreate  创建前 // created 创建后
	beforeCreate() {
		console.log('beforeCreate === 执行'); // 是无法访问 data里数据 methods的方法no
		console.log(this.msg); // undefined
	}, // 初始话data数据，事件
	created() {
		// 数据的初始化
		// 一般初始化的接口请求
		console.log('created === 执行');
		// console.log(this.msg);
		// this.fn();
		// this.tite = setInterval(() => {
		// 	console.log(11);
		// }, 1000);
	},
	methods: {
		fn() {
			console.log('====');
		},
	},
	beforeMount() {
		//不可操作dom
		console.log('beforeMount === 执行');
		console.log(document.getElementById('myP')); //null
		this.msg = 'shanshanxiaobao'; //触发不了updated和beforeUpdated
	},
	mounted() {
		// 可操作dom
		console.log('mounted === 执行');
		console.log(document.getElementById('myP')); //p
	}, // 更新阶段
	beforeUpdate() {
		// 数据更新，页面不更新
		console.log('beforeUpdate===执行');
		console.log(this.arr[4]); //1000
		console.log(document.querySelectorAll('#myUL>li')[4]); //undefined
	},
	updated() {
		// 数据更新，页面更新
		console.log('updated=== 执行');
		console.log(this.arr[4]);
		console.log(document.querySelectorAll('#myUL>li')[4]);
	},
	beforeDestroy() {
		//数据销毁前
		console.log('beforeDestroy======');
		clearInterval(this.tite);
	},
	destroyed() {
		//数据销毁后
		console.log('destroyed======');
	},
};
</script>

<style scoped></style>
