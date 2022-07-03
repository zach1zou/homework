<template>
	<section class="todoapp">
		<!-- 除了驼峰, 还可以使用-转换链接 -->
		<TodoHeader @add="taskFn"></TodoHeader>
		<TodoMain :arr="showlist" @del="delFn"></TodoMain>
		<TodoFooter
			:count="count"
			@fliters="flitersFn"
			@clear="clearFn"
		></TodoFooter>
	</section>
</template>

<script>
// 1.0 样式引入
import './styles/base.css';
import './styles/index.css';

import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

export default {
	data() {
		return {
			list: JSON.parse(localStorage.getItem('lists')) || [],
			//  [
			// 	{ id: 100, name: '吃饭', isDone: true },
			// 	{ id: 201, name: '睡觉', isDone: false },
			// 	{ id: 103, name: '打豆豆', isDone: true },
			// ],
			getSel: 'all', //// 默认显示全部
		};
	},
	components: {
		TodoHeader,
		TodoMain,
		TodoFooter,
	},
	methods: {
		//把数据用push添加到页面上
		taskFn(val) {
			let id = this.list[this.list.length - 1]
				? this.list[this.list.length - 1].id + 1
				: 100;
			this.list.push({
				name: val,
				isDone: false,
				id,
			});
		},
		//获取对应的索引findIndex方法
		//再用splice删除
		delFn(val) {
			let index = this.list.findIndex((ele) => ele.id == val);
			this.list.splice(index, 1);
		},
		flitersFn(val) {
			//把值传给getSel
			this.getSel = val;
		},
		clearFn() {
			this.list.forEach((ele) => (ele.isDone = false));
		},
	},
	computed: {
		count() {
			//用filter去筛选 当前ele.isDone取反 在return返回
			return this.list.filter((ele) => !ele.isDone).length;
		},
		showlist() {
			if (this.getSel == 'no') {
				return this.list.filter((ele) => !ele.isDone);
			} else if (this.getSel == 'yes') {
				return this.list.filter((ele) => ele.isDone);
			} else {
				return this.list;
			}
		},
	},
	//定义监听新增/修改状态/删除 后, 马上把数据同步到浏览器本地存储
	watch: {
		list: {
			deep: true,
			handler() {
				localStorage.setItem('lists', JSON.stringify(this.list || []));
			},
		},
	},
};
</script>
