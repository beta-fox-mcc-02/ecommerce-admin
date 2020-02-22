import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Toastify from 'toastify-js'
// import url from '@/axios/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    token: false
  },
  mutations: {
    FETCH_PRODUCTS (state, products) {
      state.products = products
    },
    ISLOGIN (state, status) {
      state.token = status
      state.isLogin = status
      // console.log(state.isLogin)
    },
    LOGOUT (state, status) {
      state.token = status
    }
  },
  actions: {
    loginAdmin (context, payload) {
      axios.post('https://stark-hamlet-59602.herokuapp.com/login', payload)
        .then(({ data }) => {
          localStorage.token = data.token
          context.commit('ISLOGIN', true)
          router.push('/admin')
        })
        .catch(({ response }) => {
          // console.log(response.data.err)
          Toastify({
            text: response.data.err,
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            className: 'info'
          }).showToast()
        })
    },
    registerAdmin (context, payload) {
      axios.post('https://stark-hamlet-59602.herokuapp.com/admin/register', payload)
        .then(({ data }) => {
          localStorage.token = data.token
          context.commit('ISLOGIN', true)
          router.push('/admin')
        })
        .catch(({ response }) => {
          // console.log(response.data.err)
          Toastify({
            text: response.data.err,
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            className: 'info'
          }).showToast()
        })
    },
    addProduct (context, payload) {
      return axios.post('https://stark-hamlet-59602.herokuapp.com/products/list', payload,
        {
          headers: {
            token: localStorage.token
          }
        })
    },
    fetchProducts (context) {
      axios.get('https://stark-hamlet-59602.herokuapp.com/products/list')
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(({ response }) => {
          // console.log(response.data.err)
          Toastify({
            text: response.data.err,
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            className: 'info'
          }).showToast()
        })
    },
    editProduct (context, payload) {
      return axios.put(`https://stark-hamlet-59602.herokuapp.com/products/${payload.id}/item`, payload,
        {
          headers: {
            token: localStorage.token
          }
        })
    },
    deleteProduct (context, payload) {
      return axios.delete(`https://stark-hamlet-59602.herokuapp.com/products/${payload}/item`, {
        headers: {
          token: localStorage.token
        }
      })
    }
  }
})

export default store
