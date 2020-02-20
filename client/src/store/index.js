import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: ''
  },
  mutations: {
    LOGIN (state, token) {
      state.token = token
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload)
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: payload
      })
        .then(admin => {
          console.log(admin, 'OOOOOOYYYYY')
          context.commit('LOGIN', admin.access_token)
          console.log(admin)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
