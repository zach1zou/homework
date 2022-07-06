<template>
	<div id="app" style="background: #faff72">
		<div>
			<h1>我是手机注册</h1>

			<h6>手机号码</h6>

			<panel>
				<template v-slot:con="scope">
					<div><input type="text" v-model="scope.row.phone" /></div>
				</template>
				<template #mima :="scope">
					<h6>密码</h6>
					<input type="password" />
				</template>

				<template v-slot:address>
					<h6>地址</h6>
					<input type="text" />
				</template>
			</panel>
		</div>
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
