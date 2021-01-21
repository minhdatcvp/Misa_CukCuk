import Vue from 'vue'
import App from './App.vue'
import { store }  from './Stores/Store'
import VueRouter from 'vue-router'
import {routes} from './Router/Router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
