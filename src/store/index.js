import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    afterAuth(state, access_token) {
      localStorage.setItem('token', access_token)
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
      localStorage.clear()
    }
  },
  actions: {
    register(context, data) {
      return axios({
        method: 'POST',
        url: '/register',
        data
      })
    },
    login(context, data) {
      return axios({
        method: 'POST',
        url: '/login',
        data
      })
    }
  }
})

export default store
