import Vue from 'vue';
import App from './App.vue';
import Find from '@/views/Find';
import My from '@/views/My';
import Part from '@/views/Part';
import NotFoun from '@/views/NotFound.vue';
import Ranking from '@/views/Second/Ranking';
import Recommend from '@/views/Second/Recommend';
import SongList from '@/views/Second/SongList';

import VueRouter from 'vue-router';

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		redirect: '/find',
	},
	{
		path: '/find',
		name: 'Find',
		component: Find,
		children: [
			{
				path: 'ranking',
				component: Ranking,
			},
			{
				path: 'recommend',
				component: Recommend,
			},
			{
				path: 'songList',
				component: SongList,
			},
		],
	},
	{
		path: '/my',
		name: 'My',
		component: My,
	},
	{
		path: '/part',
		name: 'Part',
		component: Part,
	},
	{
		path: '*',
		component: NotFoun,
	},
];
const router = new VueRouter({
	routes,
	mode: 'history',
});

const lslongin = false;
router.beforeEach((to, from, next) => {
	if (to.path == '/my' && !lslongin) {
		alert('location');
		next(false);
	} else {
		next();
	}
	// if (to.path !== '/path') {
	// 	next('/path');
	// } else {
	// 	next();
	// }
});

Vue.config.productionTip = false;

const vm = new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
console.log('vm', vm);
