import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { currency } from './currency'
import router from './router'

Vue.config.productionTip = false

Vue.filter('currency', currency)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')