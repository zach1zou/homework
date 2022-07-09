<template>
	<div>
		<p>选择所在地区(实名认证主体所在地)</p>
		<van-radio-group v-model="radio" direction="horizontal">
			<van-radio name="1">中国大陆</van-radio>
			<van-radio name="2">中国香港</van-radio>
		</van-radio-group>
		<p>手机号码</p>
		<van-cell-group>
			<slot name="iphone"> </slot>
			<slot name="email"> </slot>
			<van-field v-model="sms" center clearable placeholder="请输入短信验证码">
				<template #button>
					<van-button size="small" type="primary">发送验证码</van-button>
				</template>
			</van-field>
			<p>登录密码</p>
			<van-field
				v-model="password"
				type="password"
				placeholder="请输入登录密码"
			/>
			<van-field
				v-model="password1"
				type="password"
				placeholder="请再次输入登录密码"
			/>
			<p>邀请码（选填）</p>
			<van-field v-model="yqm" type="text" placeholder="请输入客户经理邀请码" />
		</van-cell-group>
	</div>
</template>
<script>
export default {
	props: {
		arr: {
			type: Array,
			default: () => [],
		},
		obj: {
			type: Object,
			default: () => {},
		},
	},
	components: {},
	data() {
		return {
			radio: '1',
			tel: '',
			email: '',
			sms: '',
			password: '',
			password1: '',
			yqm: '',
		};
	},
	methods: {},
	mounted() {},
	updated() {},
	beforeDestroy() {},
	filters: {},
	computed: {},
	watch: {},
};
</script>
<style scoped>
p {
	color: #999;
	margin: 5vw 5vw;
}
</style>
