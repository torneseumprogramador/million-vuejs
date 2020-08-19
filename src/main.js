import Vue from 'vue'
import App from './App.vue'
import AppHome from './components/app-home.vue'
import AppCdb from './components/app-cdb.vue'
import AppFormCdb from './components/app-form-cdb.vue'
import AppClientes from './components/app-clientes.vue'
import AppFormCliente from './components/app-form-cliente.vue'
import AppFundos from './components/app-fundos.vue'
import AppFormFundos from './components/app-form-fundos.vue'
import AppAcoes from './components/app-acoes.vue'
import AppFormAcoes from './components/app-form-acoes.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes =[ 
  {path:"/", component: AppHome},
  {path:"/clientes", component: AppClientes},
  {path:"/clientes/novo", component: AppFormCliente},
  {path:"/cdb", component: AppCdb},
  {path:"/cdb/novo", component: AppFormCdb},
  {path:"/fundos", component: AppFundos},
  {path:"/fundos/novo", component: AppFormFundos},
  {path:"/acoes", component: AppAcoes},
  {path:"/acoes/novo", component: AppFormAcoes},
  {path:"/acoes/:id", component: AppFormAcoes},
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
