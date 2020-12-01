import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Router from './router'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App), 
  router: Router
}).$mount('#app')
