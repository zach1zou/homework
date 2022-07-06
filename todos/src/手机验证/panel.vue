<template>
	<div id="app" style="background: #faff72">
		<slot name="con" :row="list"></slot>
		<slot name="email" :row="list"></slot>
		<slot name="mima" :row="list"></slot>
		<slot name="address"></slot>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: {
				phone: 18368858603,
				email: '2330964358@qq.com',
			},
		};
	},
	components: {},
};
</script>

<style></style>
