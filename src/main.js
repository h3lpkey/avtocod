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
  render: h => h(App),
  mounted () {
    // проверяем авторизацию
    // `catch` disabled error log
    if (localStorage.authData) {
      // Проверка на просроченную авторизацию
      let lastAuth = JSON.parse(localStorage.authData).lastAuth
      let day = 3600 * 24 * 1000
      let today = Date.now()

      lastAuth = lastAuth + day
      if (lastAuth - today >= 0) {
        this.$router.push({ path: '/' }).catch(err => {
        })
      }
    } else {
      this.$router.push({ path: '/login' }).catch(err => {
      })
    }
  }
}).$mount('#app')
