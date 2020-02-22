import Vue from 'vue';
import Vuex from 'vuex';
import userAPI from '../api/userAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: '',
    isLogin: false,
  },
  mutations: {
    SET_IDTOKEN(state, payload) {
      state.idToken = payload;
    },
    SET_ISLOGIN(state, status) {
      state.isLogin = status;
    },
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
    fetchProduct() {
      return userAPI({
        method: 'GET',
        url: '/product',
        headers: { access_token: localStorage.getItem('access_token') },
      });
    },
    deleteProduct() {
      return userAPI({
        method: 'DELETE',
        url: '/product',
        headers: { access_token: localStorage.getItem('access_token') },
      });
    },
  },
  modules: {
  },
});
