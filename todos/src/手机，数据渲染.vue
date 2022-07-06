<template>
	<div>
		<Zujian></Zujian>
		<Sjxr></Sjxr>
		
	</div>
</template>

<script>
import Zujian from './手机验证/zujian.vue';
import Sjxr from './数据渲染/Sjxr.vue';

export default {
	components: {
		MyFooter,
		MyGoods,
		Zujian,
		Sjxr,
		MyHeade,
	},
};
</script>

<style>
.mai {
	margin-top: 45px;
}
</style>
