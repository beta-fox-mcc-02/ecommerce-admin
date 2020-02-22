import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    error: '',
    loading: false
  },
  mutations: {
    afterAuth(state) {
      state.isLogin = true
    },
    showError(state, error) {
      state.error = error
    },
    logout(state) {
      state.isLogin = false
      localStorage.clear()
    },
    fetchProduct(state, products) {
      state.products = products
    },
    enLoading(state, bool) {
      state.loading = bool
    }
  },
  actions: {
    register(context, data) {
      return axios({
        method: 'POST',
        url: '/register',
        data
      })
    },
    login(context, data) {
      return axios({
        method: 'POST',
        url: '/login',
        data,
        loading: false
      })
    },
    fetchProduct(context) {
      context.commit('enLoading', true)
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('fetchProduct', data.products)
          context.commit('enLoading', false)
        })
        .catch(err => {
          if (err.response.data.error) {
            context.commit('showError', err.response.data.error)
          } else if (err.response.data.errors) {
            context.commit('showError', err.response.data.errors[0])
          }
        })
    },
    addProduct(context, data) {
      return axios({
        method: 'POST',
        url: '/products',
        data,
        headers: {
          token: localStorage.token
        }
      })
    },
    deleteProduct(context, id) {
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    editProduct(context, payload) {
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        data: payload.data,
        headers: {
          token: localStorage.token
        }
      })
    }
  }
})

export default store
