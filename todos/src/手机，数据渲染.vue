<template>
	<div>
		<Zujian></Zujian>
		<Sjxr></Sjxr>
		<MyHeade></MyHeade>
		<div class="mai">
			<MyGoods></MyGoods>
		</div>
		<MyFooter></MyFooter>
	</div>
</template>

<script>
import Zujian from './手机验证/zujian.vue';
import Sjxr from './数据渲染/Sjxr.vue';
import MyFooter from './购物车/MyFooter.vue';
import MyGoods from './购物车/MyGoods.vue';
import MyHeade from './购物车/MyHeader.vue';
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
