<template>
	<div>
		<p>1. 获取所有图书信息</p>
		<button @click="getAllFn">点击-查看控制台</button>
		<p>2. 查询某本书籍信息</p>
		<input type="text" placeholder="请输入要查询 的书名" v-model="bName" />
		<button @click="findFn">查询</button>
		<div>
			<p>3. 新增图书信息</p>
			<div>
				<input type="text" placeholder="书名" v-model="list.bookname" />
			</div>
			<div>
				<input type="text" placeholder="作者" v-model="list.author" />
			</div>
			<div>
				<input type="text" placeholder="出版社" v-model="list.publisher" />
			</div>
			<button @click="sendFn">发布</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://123.57.109.30:3006';
export default {
	data() {
		return {
			bName: '',
			list: {
				bookname: '',
				author: '',
				publisher: '',
			},
		};
	},
	methods: {
		getAllFn() {
			axios({
				url: '/api/getbooks',
				method: 'get',
			}).then((res) => console.log(res));
		},
		// ...省略了查询所有的代码
		findFn() {
			axios({
				url: '/api/getbooks',
				method: 'get',
				params: {
					bookname: this.bName,
				},
			}).then((res) => console.log(res));
		},
		sendFn() {
			axios({
				url: '/api/addbook',
				method: 'post',
				data: {
					appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
					...this.list,
				},
			}).then((res) => console.log(res));
		},
	},
};
</script>
