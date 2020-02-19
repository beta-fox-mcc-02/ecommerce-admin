import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000'
Vue.http.interceptors.push((request) => {
  if (!request.url.includes('login') && !request.url.includes('register')) {
    request.headers.set('Authorization', 'Bearer ' + localStorage.token)
  }
})

const customActions = {
  login: { method: 'POST', url: 'admin/login' },
  getAdmin: { method: 'GET', url: 'admin' }
}
const resources = Vue.resource('', {}, customActions)
export default resources
