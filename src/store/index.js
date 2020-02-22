import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: '',
    isLogin: false,
    addProduct: false,
    items: []
  },
  mutations: {
    LOGIN (state, token) {
      console.log('masuk nih seharusnya')
      state.isLogin = token
    },
    ADD_PRODUCT (state, status) {
      state.addProduct = status
    },
    FETCH_DATA (state, items) {
      state.items = items
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload, 'yang terbaru loh ini')
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: payload
      })
        .then(admin => {
          console.log('SUKES MASOOOOOOK')
          localStorage.setItem('access_token', admin.data.access_token)
          context.commit('LOGIN', true)
          this.$route.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      console.log(payload)
      axios({
        url: 'http://localhost:3000/registerAdmin',
        method: 'post',
        data: payload
      })
        .then(userRegistered => {
          console.log(userRegistered)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock,
          RoleId: payload.RoleId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(product => {
          console.log('datanya berhasil di add loh0-----', product)
          context.commit('ADD_PRODUCT', true)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchData (context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(items => {
          context.commit('FETCH_DATA', items)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
