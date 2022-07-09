<template>
	<div>
		<h1 id="z" ref="zy">张羽</h1>
		<Demo ref="de"></Demo>
		<p>2. vue更新DOM是异步的</p>
		<p ref="myP">{{ count }}</p>
		<button @click="btn">点击count+1, 马上提取p标签内容</button>
	</div>
</template>

<script>
import Demo from './Child/Demo.vue';
export default {
	mounted() {
		console.log(this.$refs.zy);
		console.log(document.querySelector('#z'));
		let demo = this.$refs.de;
		demo.fn();
	},
	components: {
		Demo,
	},
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		btn() {
			this.count++;

			this.$nextTick(() => {
				console.log(this.$refs.myP.innerHTML);
			});
		
		},
	},
};
</script>

<style></style>
