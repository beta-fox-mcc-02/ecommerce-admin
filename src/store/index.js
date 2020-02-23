import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    userLogin (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(success => {
          const { token } = success.data

          this.$emit('showContent', 'Home')
          localStorage.setItem('token', token)
        })
        .catch(err => {
          console.log(err)

          this.$emit('error-message', 'Email or password dismatch')
        })
    }
  },
  modules: {
  }
})
