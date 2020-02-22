<<<<<<< HEAD
<<<<<<< HEAD
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42

Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
<<<<<<< HEAD
  store,
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
  render: h => h(App)
}).$mount('#app')
