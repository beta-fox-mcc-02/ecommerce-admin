import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isAdmin: false,
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
    },
    VERIFY_TOKEN (state, data) {
      console.log(data, 'INI DATA')
      const decoded = jwt.verify(data, process.env.VUE_APP_SECRET)
      console.log(decoded, 'INI DECODE')
      if (decoded.role) {
        state.isAdmin = true
      }
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
          context.dispatch('fetchProduct')
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
