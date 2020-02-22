import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isAdmin: false,
    products: '',
    menBox: [],
    ladiesBox: []
  },
  mutations: {
    SET_IS_ADMIN (state, payload) {
      state.isAdmin = payload
    },
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LADIES_BOX (state, payload) {
      state.ladiesBox.push(payload)
    },
    SET_MEN_BOX (state, payload) {
      state.menBox.push(payload)
    }
  },
  actions: {
    adminLogin (context, payload) {
      context.commit('SET_IS_ADMIN', payload)
    },
    isLogin (context, payload) {
      context.commit('SET_IS_LOGIN', payload)
    },
    fetchData (context) {
      return axios({
        method: 'GET',
        url: '/products'
      })
    },
    setProducts (context, payload) {
      context.commit('SET_PRODUCTS', payload)
      payload.forEach(watch => {
        if (watch.Category.name === 'Men Watch') {
          context.commit('SET_MEN_BOX', watch)
        } else if (watch.Category.name === 'Ladies Watch') {
          context.commit('SET_LADIES_BOX', watch)
        }
      })
    }
  },
  modules: {
  }
})
