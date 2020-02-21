import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('access_token')
  },
  mutations: {
    SET_SESSION(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    userRegister({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/register',
          data: payload,
          method: 'POST'
        })
        .then(({data}) => {
          commit('SET_SESSION', true)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },

    userLogin ({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/login',
          data: payload,
          method: 'POST'
        })
        .then(({data}) => {
          commit('SET_SESSION', true)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
