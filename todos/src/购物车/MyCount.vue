<template>
	<div class="my-counter">
		<button
			type="button"
			class="btn btn-light"
			:disabled="obj.goods_count <= 1"
			@click="obj.goods_count--"
		>
			-
		</button>
		<input type="number" class="form-control inp" v-model="obj.goods_count" />
		<button type="button" class="btn btn-light" @click="obj.goods_count++">
			+
		</button>
	</div>
</template>

<script>
// 目标: 点击+和-或者直接修改输入框的值影响商品购买的数量
// 目标: 商品数量 - 控制
// 1. 外部传入数据对象
// 2. v-model关联对象的goods_count属性和输入框 (双向绑定)
// 3. 商品按钮 +和-, 商品数量最少1件
// 4. 侦听数量改变, 小于1, 直接强制覆盖1
export default {
	props: {
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	watch: {
		obj: {
			deep: true,
			handler(val) {
				if (val.goods_count < 1) {
					val.goods_count = 1;
				}
			},
		},
	},
};
</script>

<style lang="less" scoped>
.my-counter {
	display: flex;
	.inp {
		width: 45px;
		text-align: center;
		margin: 0 10px;
	}
	.btn,
	.inp {
		transform: scale(0.9);
	}
}
</style>
