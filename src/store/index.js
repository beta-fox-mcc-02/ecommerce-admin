import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
// import url from '@/axios/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: []
  },
  mutations: {
    FETCH_PRODUCTS (state, products) {
      state.products = products
    },
    ISLOGIN (state, status) {
      state.isLogin = status
      console.log(state.isLogin)
    }
  },
  actions: {
    loginAdmin (context, payload) {
      axios.post('http://localhost:3000/admin/login', payload)
        .then(({ data }) => {
          localStorage.token = data.token
          context.commit('ISLOGIN', true)
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerAdmin (context, payload) {
      axios.post('http://localhost:3000/admin/register', payload)
        .then(({ data }) => {
          localStorage.token = data.token
          context.commit('ISLOGIN', true)
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios.post('http://localhost:3000/products/list', payload,
        {
          headers: {
            token: localStorage.token
          }
        })
        .then(({ data }) => {
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios.get('http://localhost:3000/products/list')
        .then(({ data }) => {
        //   console.log(data)
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios.put(`http://localhost:3000/products/${payload.id}/item`, payload,
        {
          headers: {
            token: localStorage.token
          }
        })
        .then(({ data }) => {
        //   console.log(data)
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios.delete(`http://localhost:3000/products/${payload}/item`, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
        //   console.log(data)
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

export default store
