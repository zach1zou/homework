<template>
	<!-- 底部 -->
	<div class="my-footer">
		<!-- 全选 -->
		<div class="custom-control custom-checkbox">
			<input
				type="checkbox"
				class="custom-control-input"
				id="footerCheck"
				v-model="isAll"
			/>
			<label class="custom-control-label" for="footerCheck">全选</label>
		</div>
		<!-- 合计 -->
		<div>
			<span>合计:</span>
			<span class="price">¥ {{ heji }}</span>
		</div>
		<!-- 按钮 -->
		<button type="button" class="footer-btn btn btn-primary">
			结算{{ jiesuan }}
		</button>
	</div>
</template>

<script>
// 1. 点击获取它的选中状态
// 2. 同步给上面每个小选框 - 而小选框的选中状态又在数组里
// 3. 把数组传给MyFooter, 然后更新即可 - 因为对象都是引用关系的
//
export default {
	computed: {
		//需要用到计算属性去计算小选框
		isAll: {
			get() {
				return this.$parent.list.every((ele) => ele.goods_state);
			},
			set(val) {
				this.$parent.list.forEach((ele) => {
					ele.goods_state = val;
				});
			},
		},
		//判断选中状态去计算
		heji() {
			return this.$parent.list.reduce((sum, ele) => {
				if (ele.goods_state) {
					sum += ele.goods_count;
				}
				return sum;
			}, 0);
		},
		jiesuan() {
			return this.$parent.list.reduce((sum, ele) => {
				if (ele.goods_state) {
					sum += ele.goods_count * ele.goods_price;
				}
				return sum;
			}, 0);
		},
	},
};
</script>

<style lang="less" scoped>
.my-footer {
	position: fixed;
	z-index: 2;
	bottom: 0;
	width: 100%;
	height: 50px;
	border-top: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	background: #fff;

	.price {
		color: red;
		font-weight: bold;
		font-size: 15px;
	}
	.footer-btn {
		min-width: 80px;
		height: 30px;
		line-height: 30px;
		border-radius: 25px;
		padding: 0;
	}
}
</style>
