import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SETISLOGIN (state, status) {
      state.isLogin = status
    }
  }
})

export default store
