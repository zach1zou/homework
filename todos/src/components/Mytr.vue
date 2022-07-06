<template>
	<div id="app">
		<div>
			<input type="text" placeholder="搜索-书名名称" />
			<button>查询</button>
		</div>
		<div>
			<input type="text" placeholder="书名" v-model="list.bookname" /><br />
			<input type="text" placeholder="作者" v-model="list.author" /><br />
			<input type="text" placeholder="出版社" v-model="list.publisher" /><br />
			<button class="one-button-primary" @click="addBookname">新增</button>
		</div>
		<div>
			<table border="1" cellpadding="10" cellspacing="0">
				<tr>
					<th>序号</th>
					<th>书名</th>
					<th>作者</th>
					<th>出版商</th>
					<th>操作</th>
				</tr>
				<tr v-for="item in list" :key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.bookname }}</td>
					<td>{{ item.author }}</td>
					<td>{{ item.publisher }}</td>
					<td>
						<a href="#">删除</a>
						<a href="#">详情</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{
					// 参数名提前和后台的参数名对上-发送请求就不用再次对接了
					bookname: '',
					author: '',
					publisher: '',
				},
			],

			bookname: '',
		};
	},
	created() {
		this.$axios({
			url: '/api/getbooks',
		}).then((res) => {
			console.log(res);
			this.list = res.data.data;
		});
	},
	//搜索增图书不对
	methods: {
		addBookname() {
			this.$axios({
				url: '/api/addbook',
				method: 'POST',
				data: {
					...this.list,
				},
			}).then((res) => {
				console.log(res);
			});
			this.list.push({
				id: this.list[this.res.length - 1].id + 1,
				bookname: this.list.bookname,
				author: this.list.author,
				publisher: this.list.publisher,
			});
		},
	},
};
</script>
<style lang="less" scoped>
button {
	color: #392f41;
	outline: none;
	border: none;
	padding: 8px 20px;
	margin-top: 5px;
	border-radius: 7px;
	font-size: 16px;
}
.one-button-primary {
	background-color: skyblue;
}
</style>
