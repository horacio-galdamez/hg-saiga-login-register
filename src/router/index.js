import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';

const Authentication = () => import('@/views/Authentication.vue');
const Home = () => import('@/views/Home.vue');

Vue.use(VueRouter);

const checkToken = (to, from, next) => {
	//Checks the authentication token exists in the browser session
    if (store.getters.isAuthenticated) {
        return next();
    } else {
        next(`/login?redirect=${to.fullPath}`);
    }
};

const checkAuth = (to, from, next) => {
	
	//Checks the user is authenticated and assigns it to the vuex store
    if (localStorage.token && localStorage.userId) {
        try {
            let res = store.dispatch('getUser', { token: localStorage.token, id: localStorage.userId });
            if (res && !!res.id) {
                return next(to.query.redirect ? to.query.redirect : '/');
            } else {
                return next();
            }
        } catch (err) {
            return next();
        }
    } else {
        return next();
    }
};

const routes = [
    {
		path: '/login',
		name: 'Authentication',
		component: Authentication,
		beforeEnter(to, from, next) {
			checkAuth(to, from, next);
		}
    },
    {
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter(to, from, next) {
			checkToken(to, from, next);
		}
    },
];

const router = new VueRouter({
	mode: 'history',
	routes,
	base: process.env.BASE_URL
});

export default router;