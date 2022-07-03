<template>
	<footer class="footer">
		<span class="todo-count"
			>剩余<strong>{{ count }}</strong></span
		>
		<ul class="filters">
			<li>
				<a
					:class="{ selected: isSel == 'all' }"
					@click="btn('all')"
					href="javascript:;"
					>全部</a
				>
			</li>
			<li>
				<a
					:class="{ selected: isSel == 'no' }"
					@click="btn('no')"
					href="javascript:;"
					>未完成</a
				>
			</li>
			<li>
				<a
					:class="{ selected: isSel == 'yes' }"
					@click="btn('yes')"
					href="javascript:;"
					>已完成</a
				>
			</li>
		</ul>
		<button class="clear-completed" @click="clear">清除已完成</button>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			isSel: 'all', // 值为all全部, yes已完成, no未完成其中一种
		};
	},
	props: ['count'],
	methods: {
		btn(val) {
			this.isSel = val;
			this.$emit('fliters', val);
		},
		clear() {
			this.$emit('clear');
		},
	},
};
</script>
