import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import Auth from './Auth.vue'
import Main from './Main.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/login', component: Auth },
  { path: '/', component: Main }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
