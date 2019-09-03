import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/details/:id',
			name: 'details',
			props: true,
			component: () =>
				import(
					/* webpackChunkName: "details" */ './components/Details.vue'
				)
		}
	]
});
