import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../src/config/axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    idToEdit: null,
    productToEdit: {},
    isLoading: false,
    isError: false,
    errorMessage: '',
    successSignUpMessage: ''
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
    },
    SET_IS_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_IS_ERROR (state, payload) {
      state.isError = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
    },
    SET_SUCCESS_SIGNUP_MESSAGE (state, payload) {
      state.successSignUpMessage = payload
    }
  },
  actions: {
    fetchAllProducts () {
      this.commit('SET_IS_LOADING', true)
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
