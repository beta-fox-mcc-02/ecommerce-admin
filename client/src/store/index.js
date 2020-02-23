import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selected: {},
    page: ''
  },
  mutations: {
    FETCH_PRODUCT (state, list) {
      state.products = list
    },
    SELECTED_PRODUCT (state, payload) {
      state.selected = payload
    },
    CHANGE_PAGE (state, page) {
      state.page = page
    }
  },
  actions: {
    fetchProduct (context) {
      return axios({
        method: 'GET',
        url: 'https://secure-reaches-76484.herokuapp.com/admin/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchRegister (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://secure-reaches-76484.herokuapp.com/admin/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchLogin (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://secure-reaches-76484.herokuapp.com/admin/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchCreate (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://secure-reaches-76484.herokuapp.com/admin/product',
        data: {
          name: payload.name,
          author: payload.author,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchEdit (context, payload) {
      return axios({
        method: 'PUT',
        url: `https://secure-reaches-76484.herokuapp.com/admin/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          author: payload.author,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    fetchDelete (context, payload) {
      return axios({
        method: 'delete',
        url: `https://secure-reaches-76484.herokuapp.com/admin/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
