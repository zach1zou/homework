<template>
	<div id="app" style="background: pink">
		<h1>我是邮箱注册</h1>
		<p>邮箱号</p>

		<panel>
			<template v-slot:con="scope">
				<div><input type="text" v-model="scope.row.email" /></div>
			</template>
		</panel>
	</div>
</template>

<script>
import panel from './panel.vue';

export default {
	components: {
		panel,
	},
};
</script>

<style></style>
