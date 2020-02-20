import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: [],
    detailProduct: {},
    loading: true
  },
  mutations: {
    SET_ALL_PRODUCT (state, payload) {
      state.allProduct = payload
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    getAllItem ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: `GET`,
        url: `/products`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_LOADING', false)
          commit('SET_ALL_PRODUCT', data.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
