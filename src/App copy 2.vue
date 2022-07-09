<template>
	<div>
		<h1>App组件</h1>
		<a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
		<a href="#/about">关于</a>&nbsp;
		<component :is="comName"></component>
	</div>
</template>

<script>
import Rankings from '@/views/zy/Zhangyu.vue';
import Recommends from '@/views/zy/Anna.vue';
import SongLists from '@/views/zy/Zxy.vue';
export default {
	name: 'App',
	data() {
		return {
			comName: 'Rankings',
		};
	},
	components: {
		Rankings,
		Recommends,
		SongLists,
	},
	created() {
		window.onhashchange = () => {
			switch (location.hash) {
				case '#/movie':
					this.comName = 'SongLists';

					break;
				case '#/about':
					this.comName = 'Recommends';
					break;
				case '#/home':
					this.comName = 'Rankings';
					break;
			}
		};
	},
};
</script>

<style></style>
