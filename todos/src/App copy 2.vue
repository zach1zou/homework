<template>
	<div>
		<MyHeade title="购物车案例"></MyHeade>
		<div class="mai">
			<MyGoods v-for="item in list" :key="item.id" :arr="item"></MyGoods>
		</div>
		<MyFooter></MyFooter>
		<Zujian></Zujian>
		<Sjxr></Sjxr>
	</div>
</template>

<script>
import MyFooter from './购物车/MyFooter.vue';
import MyGoods from './购物车/MyGoods.vue';
import MyHeade from './购物车/MyHeader.vue';
import Zujian from './手机验证/zujian.vue';
import Sjxr from './数据渲染/Sjxr.vue';

export default {
	components: {
		MyFooter,
		MyGoods,
		MyHeade,
		Zujian,
		Sjxr,
	},
	data() {
		return {
			// 定义空数组来接收请求回来的数据
			list: [],
		};
	},

	created() {
		//请求数据
		this.$axios({
			url: '/api/cart',
		}).then((res) => {
			console.log(res);
			this.list = res.data.list;
		});
	},
};
</script>

<style>
.mai {
	margin-top: 45px;
}
</style>
