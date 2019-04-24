// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './common/sass/main.scss'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

// 获取本地token方法
function getStorageToken(vm) {
	let getToken = JSON.parse(localStorage.getItem('userToken'));
	if (getToken) {
		let currentTime = new Date().getTime();
		if ( currentTime > getToken.time ) {
			localStorage.removeItem('userToken');
		}
	}
}

// 路由守卫判断是否需要登录
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		getStorageToken();
		if (!localStorage.getItem('userToken')) {
			next({
				path: '/loginSign',
				query: {redirect: to.fullPath}
			})
		} else {
			next();
		}
	} else {
		next();
	}
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 获取本地存储的token，并判断其是否过期
getStorageToken();

