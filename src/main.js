import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import global_ from './utils/Global.js'
Vue.prototype.GLOBAL = global_

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
