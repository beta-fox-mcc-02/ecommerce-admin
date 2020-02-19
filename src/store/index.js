import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentNav: 'register'
  },
  mutations: {
    SET_CURRENT_NAV (state, payload) {
      state.currentNav = payload
      console.log(state.currentNav, 'di Mutation')
    }
  },
  actions: {
    fetchProducts ({ commit }) {
    },
    changeNav (context, nav) {
      console.log(nav, 'di store')
      context.commit('SET_CURRENT_NAV', nav)
    }
  },
  modules: {
  }
})
