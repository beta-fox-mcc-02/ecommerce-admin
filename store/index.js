import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../src/config/axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    idToEdit: null,
    productToEdit: {}
  },
  mutations: {
    SETISLOGIN (state, status) {
      state.isLogin = status
    },

    SET_PRODUCTS (state, payload) {
      state.products = payload
    },

    SET_ID_TO_EDIT (state, payload) {
      state.idToEdit = payload
    },

    SET_PRODUCT_TO_EDIT (state, payload) {
      state.productToEdit = payload
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
    },

    getProductById () {
      const id = this.state.idToEdit
      return axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  }
})

export default store
