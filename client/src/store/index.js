import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selected: {},
    page: 'login'
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
      console.log(page)
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/admin/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCT', data)
        })
        .catch(err => {
          console.log(err, 'error fetch product')
        })
    },
    fetchRegister (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
        .then(data => {
          console.log('sukses register')
          context.commit('CHANGE_PAGE', 'login')
          router.push({ path: '/admin/login' })
        })
        .catch(err => {
          console.log(err, 'error fetch register')
        })
    },
    fetchLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('token', data.token)
          context.dispatch('fetchProduct')
          context.commit('CHANGE_PAGE', 'home')
          router.push({ path: '/admin' })
        })
        .catch(err => {
          console.log(err)
          console.log(err.message, 'error fetch login')
        })
    },
    fetchCreate (context, payload) {
      console.log(payload, 'payload gan')
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/product',
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
        .then(data => {
          console.log(data, 'XXXXXXXXXXXXXXX')
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err, 'error fetchCreate')
        })
    },
    fetchEdit (context, payload) {
      console.log(payload, 'payload fetch edit')
      axios({
        method: 'PUT',
        url: `http://localhost:3000/admin/product/${payload.id}`,
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
        .then(data => {
          context.dispatch('fetchProduct')
          router.push({ path: '/admin' })
        })
        .catch(err => {
          console.log(err, 'error catch fetch product')
        })
    },
    fetchDelete (context, payload) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/admin/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
