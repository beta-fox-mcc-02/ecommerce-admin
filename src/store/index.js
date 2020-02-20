import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoginPage: true,
    loadingForm: false
  },
  mutations: {
    changeSignForm (state, status) {
      console.log('mutation kepencet')
      state.isLoginPage = status
    },
    runLoading (state, status) {
      state.loadingForm = status
    }
  },
  actions: {
  },
  modules: {
  }
})
