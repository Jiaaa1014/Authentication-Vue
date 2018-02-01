import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)
import store from './store'

import DashBoard from './components/DashBoard.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

const router = new VueRouter({
  mode: 'history',
  // is routes not route
  routes: [
    { path: '/dashboard', component: DashBoard },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp }
  ]
})
// 沒登入轉signin
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  }
  else {
    router.replace('/signin')
    // TODO replace by commenting back in

  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
