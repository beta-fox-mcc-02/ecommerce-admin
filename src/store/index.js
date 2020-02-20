import Vue from 'vue';
import Vuex from 'vuex';
import userAPI from '../api/userAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // isLogin
  },
  mutations: {
  },
  actions: {
    login(context, payload) {
      return userAPI.post('/login', { email: payload.email, password: payload.password });
    },
    register(context, newUser) {
      return userAPI.post('/register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        roles: newUser.roles,
      });
    },
  },
  modules: {
  },
});
