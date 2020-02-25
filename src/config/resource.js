import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = process.env.VUE_APP_BASE_URL
Vue.http.interceptors.push((request) => {
  if (!request.url.includes('login') &&
    (
      (request.url === 'admin' && request.method !== 'POST') ||
    (request.url === 'users' && request.method !== 'POST'))
  ) {
    Vue.http.headers.common.Authorization = 'Bearer ' + localStorage.token
  }
})

const customActions = {
  login: { method: 'POST', url: 'admin/login' },
  getAdmin: { method: 'GET', url: 'admin' },
  register: { method: 'POST', url: 'admin' },
  getCategories: { method: 'GET', url: 'categories' },
  createCategory: { method: 'POST', url: 'categories' },
  deleteCategory: { method: 'DELETE', url: 'categories{/id}' },
  addProduct: { method: 'POST', url: 'products' },
  getProducts: { method: 'GET', url: 'products' },
  findOneProduct: { method: 'GET', url: 'products{/id}' },
  editProduct: { method: 'PUT', url: 'products/{id}' },
  deleteProduct: { method: 'DELETE', url: 'products/{id}' },
  addProductImage: { method: 'POST', url: 'product-images' },
  editProductImage: { method: 'PUT', url: 'product-images/{id}' },
  deleteProductImage: { method: 'DELETE', url: 'product-images{/id}' }
}
const resources = Vue.resource('', {}, customActions)
export default resources
