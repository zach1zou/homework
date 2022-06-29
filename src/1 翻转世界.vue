<template>
	<div>
		<p>{{ msg }}</p>
		<button @click="btn">翻转世界</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello,Vue!',
		};
	},
	methods: {
		btn() {
			this.msg = this.msg.split('').reverse().join('');
		},
	},
};
</script>

<style></style>
