import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'
import axios from 'axios'

Vue.use(VueRouter)

Vue.filter('currency', (value)=>{
  return '$'+value.toLocaleString()
})

axios.defaults.baseURL='https://vuejs-http-95bb2.firebaseio.com'

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
