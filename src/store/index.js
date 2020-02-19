import Vue from 'vue'
import Vuex from 'vuex'
import client from '../helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    products: []
  },
  mutations: {
    // AUTH
    auth(state, data) {
      state.token = data.token
      state.user = data.user
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.user)
    },
    logout(state) {
      state.token = ''
      localStorage.clear('token')
      state.user = {}
      localStorage.clear('user')
    },

    // END OF AUTH

    // PRODUCTS

    SET_PRODUCTS(state, products) {
      state.products = products
    },

    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    DELETE_PRODUCT(state, id) {
      state.products = state.products.filter(i => i.id !== id)
    }

    // END OF PRODUCTS
  },
  actions: {
    // AUTH
    async register({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/users/register', data)
          .then(response => {
            commit('auth', response.data)
            resolve('/')
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/users/login', data)
          .then(({ data }) => {
            commit('auth', data)
            resolve('/dashboard')
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        resolve()
      })
    },

    // END OF AUTH

    // PRODUCTS

    getProducts({ commit }) {
      return new Promise((resolve, reject) => {
        client
          .get(`/products`)
          .then(({ data }) => {
            commit('SET_PRODUCTS', data.products)
            resolve(data.products)
          })
          .catch(e => {
            reject(e)
          })
      })
    },

    addProduct({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/products', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            commit('ADD_PRODUCT', response.data)
            resolve('Success adding product.')
          })
          .catch(() => {
            reject('Error adding product.')
          })
      })
    },

    deleteProduct({ commit }, id) {
      return new Promise((resolve, reject) => {
        client
          .delete(`/products/${id}`)
          .then(() => {
            commit('DELETE_PRODUCT', id)
            resolve()
          })
          .catch(e => {
            reject(e)
          })
      })
    }

    // END OF PRODUCTS
  }
})
