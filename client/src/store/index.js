import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    categories: [],
    loading: false
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    isLogin ({ commit }, payload) {
      commit('SET_IS_LOGIN', payload)
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/admin/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
    },
    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts ({ commit, state }) {
      state.loading = true
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data)
          setTimeout(() => {
            state.loading = false
          }, 3000)
        })
        .catch(_ => {})
    },
    fetchCategories ({ commit }) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          commit('SET_CATEGORIES', data)
        })
        .catch(_ => {})
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        data: {
          name: payload.name,
          description: payload.description,
          imageUrl: payload.imageUrl,
          price: Number(payload.price),
          stock: Number(payload.stock),
          CategoryId: payload.CategoryId
        },
        headers: {
          token: localStorage.token
        }
      })
    },
    removeWatch (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(_ => {
          context.dispatch('fetchProducts')
        })
        .catch(_ => {})
    },
    fetchOneProduct (context, payload) {
      return axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    updateProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        data: {
          name: payload.name,
          description: payload.description,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          token: localStorage.token
        }
      })
    }
  },
  modules: {
  },
  getters: {
    watch (state, payload) {
      return state.products.filter(product => product.id === 1)
    }
  }
})
