import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    err: []
  },
  mutations: {
    edit (state, payload) {
      state.data = payload
    },
    err (state, payload) {
      state.err = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
