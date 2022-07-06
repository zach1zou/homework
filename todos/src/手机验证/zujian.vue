<template>
	<div id="app">
		<button @click="comName = 'Sjzc'">手机注册</button>
		<button @click="comName = 'Yxzc'">邮箱注册</button>

		<div style="border: 1px solid red">
			<keep-alive>
				<component :is="comName"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import Sjzc from './sjzc.vue';
import Yxzc from './Yxzc.vue';
export default {
	data() {
		return {
			comName: Sjzc,
		};
	},
	components: {
		Sjzc,
		Yxzc,
	},
};
</script>

<style></style>
