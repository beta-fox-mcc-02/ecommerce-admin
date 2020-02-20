import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    categories: [],
    products: [],
    adminMenu: [
      { title: 'Home', icon: 'home', route: '/admin' },
      { title: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
      { title: 'Shoes', icon: 'storage', route: '/admin/shoes' },
      { title: 'Categories', icon: 'category', route: '/admin/categories' }
    ]
  },
  mutations: {
    SET_LOGIN_STATUS (state, bool) {
      state.isLogin = bool
    }
  },
  actions: {
    loggedIn (context) {
      context.commit('SET_LOGIN_STATUS', true)
    }
  },
  modules: {
  }
})
