import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000'

const customActions = {
  login: { method: 'POST', url: 'admin/login' }
}
const resources = Vue.resource('', {}, customActions)
export default resources
