import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueToastify from 'vue-toastify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(VueToastify)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
