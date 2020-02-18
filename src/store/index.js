import Vue from 'vue'
import Vuex from 'vuex'
import client from '../helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth(state, data) {
      state.token = data.token
      state.user = data.user
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.user)
    },
    logout(state) {
      state.token = ''
      localStorage.clear('token')
      state.user = {}
      localStorage.clear('user')
    }
  },
  actions: {
    async register({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/users/register', data)
          .then(response => {
            commit('auth', response.data)
            resolve('/')
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        client
          .post('/users/login', data)
          .then(({ data }) => {
            commit('auth', data)
            if (data.user.RoleId === 1) {
              resolve('/dashboard')
            } else {
              resolve('/')
            }
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        resolve()
      })
    }
  },
  modules: {}
})
