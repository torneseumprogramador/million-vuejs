import Vue from 'vue'
import App from './App.vue'
import Home from './components/app-home.vue'
import Clientes from './components/app-clientes.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: "/", component: Home},
  {path: "/clientes", component: Clientes},
]

const router = new VueRouter({
  routes: routes,
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
