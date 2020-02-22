import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../src/config/axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: []
  },
  mutations: {
    SETISLOGIN (state, status) {
      state.isLogin = status
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchAllProducts () {
      return axios({
        method: 'GET',
        url: '/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  }
})

export default store
