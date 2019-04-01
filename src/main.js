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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
