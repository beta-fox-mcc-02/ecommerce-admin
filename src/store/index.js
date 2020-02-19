import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: [],
    detailProduct: {}
  },
  mutations: {
    SET_ALL_PRODUCT(state, payload) {
      state.allProduct = payload
    }
  },
  actions: {
    getAllItem({ commit }) {
      axios({
        method: `GET`,
        url: `/products`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log(data, `iki lhooooooooooooooooooo data`);
          commit('SET_ALL_PRODUCT', data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
