<template>
	<ul class="todo-list">
		<!-- completed: 完成的类名 -->
		<li :class="{ completed: item.isDone }" v-for="item in arr" :key="item.id">
			<div class="view">
				<input class="toggle" type="checkbox" v-model="item.isDone" />
				<label>{{ item.name }}</label>
				<button class="destroy" @click="del(item.id)"></button>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		arr: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		//点击事件传入id，子向父传值
		del(id) {
			this.$emit('del', id);
		},
	},
};
</script>
