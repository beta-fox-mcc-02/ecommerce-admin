import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    item: {
      id: '',
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    },
    errorMessage: ''
  },
  mutations: {
    SET_REGISTER (state, payload) {
      state.register = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ITEM (state, payload) {
      state.item = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: 'https://blooming-harbor-59866.herokuapp.com/products',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data.dataItems)
        })
    },
    findProductById (context, payload) {
      axios({
        method: 'GET',
        url: 'https://blooming-harbor-59866.herokuapp.com/products/' + payload,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          const payload = {
            id: data.dataItem.id,
            name: data.dataItem.name,
            image_url: data.dataItem.image_url,
            price: data.dataItem.price,
            stock: data.dataItem.stock
          }
          context.commit('SET_ITEM', payload)
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR_MESSAGE', response)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: 'https://blooming-harbor-59866.herokuapp.com/products/' + payload.id,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR_MESSAGE', response)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: 'https://blooming-harbor-59866.herokuapp.com/products/' + payload,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR_MESSAGE', response)
        })
    }
  },
  modules: {
  }
})
