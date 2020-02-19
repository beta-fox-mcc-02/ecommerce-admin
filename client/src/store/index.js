import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isAdmin: '',
    error: {}
  },
  mutations: {
    FETCH_PRODUCT (state, data) {
      state.products = data
    },
    ISADMIN (state, data) {
      if (data.role) {
        state.isAdmin = true
      } else {
        state.isAdmin = false
      }
    },
    ERROR (state, err) {
      state.error = err
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/products'
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCT', data)
        })
        .catch(err => {
          context.commit('ERROR', err)
        })
    },
    login (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          context.commit('ISADMIN', data)
        })
        .catch(err => {
          context.commit('ERROR', err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url,
          category: payload.category
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
