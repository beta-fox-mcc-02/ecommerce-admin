import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    token: '',
    error: {}
  },
  mutations: {
    FETCH_PRODUCT (state, data) {
      state.products = data
    },
    TOKEN (state, data) {
      state.token = data
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
      console.log(payload, '+++++++++')
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(data => {
          console.log(data)
          context.commit('TOKEN', data)
        })
        .catch(err => {
          console.log(err)
          context.commit('ERROR', err)
        })
    }
  },
  modules: {
  }
})
