import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Toastify from 'toastify-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showRegister: false,
    currentUser: ''
  },
  mutations: {
    REGISTER_TRIGGER (state) {
      state.showRegister = !state.showRegister
    },
    SET_CURRENT_USER (state, payload) {
      state.currentUser = payload.currentUser
    },
    ERR_HANDLER (payload) {
      Toastify({
        text: payload.errors,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        backgroundColor: 'linear-gradient(to right, #c62828, #e53935)'
      }).showToast()
    },
    SUCCESS_NOTIF (payload) {
      Toastify({
        text: payload.msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        backgroundColor: 'linear-gradient(to right, #1565c0, #1e88e5)'
      }).showToast()
    }
  },
  actions: {
    createUser (context, payload) {
      const { username, email, password } = payload
      Axios({
        url: 'http://localhost:3000/users/register',
        method: 'POST',
        data: {
          username,
          email,
          password,
          role: true
        }
      })
        .then(({ data }) => {
          context.commit('SUCCESS_NOTIF', { msg: data.messages })
        })
        .catch(err => {
          context.commit('ERR_HANDLER', { errors: err.errors })
        })
    },
    login (context, payload) {
      console.log(payload)
      const { user, password } = payload
      return Axios({
        url: 'http://localhost:3000/users/',
        method: 'POST',
        data: { user, password }
      })
    }
  },
  modules: {
  }
})
