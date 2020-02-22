import Vue from 'vue'
import Vuex from 'vuex'
import client from '../helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    products: [],
    product: {}
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
    },

    // END OF PRODUCTS

    // PRODUCT

    SET_PRODUCT(state, product) {
      state.product = product
    }

    // END OF PRODUCT
  },
  actions: {
    // AUTH
    async register({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/users/register', data)
          .then(response => {
            commit('auth', response.data)
            resolve('/dashboard')
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
    },

    getProduct({ commit }, id) {
      return new Promise((resolve, reject) => {
        client
          .get(`/products/${id}`)
          .then(({ data }) => {
            commit('SET_PRODUCT', data.product)
            resolve(data.product)
          })
          .catch(e => {
            reject(e)
          })
      })
    },

    updateProduct({ commit }, data, id) {
      console.log(id)
      return new Promise((resolve, reject) => {
        client
          .put(`/products/${data.id}`, data)
          .then(({ data }) => {
            commit('SET_PRODUCT', data.product)
            resolve('/dashboard/')
          })
          .catch(e => {
            reject(e)
          })
      })
    },

    updateProductImage({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .patch(`/products/${data.id}`, data.formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(({ data }) => {
            commit('SET_PRODUCT', data.product)
            resolve('Success updating product.')
          })
          .catch(e => {
            console.log(e)
            reject('Error updating product.')
          })
      })
    }

    // END OF PRODUCTS
  }
})
