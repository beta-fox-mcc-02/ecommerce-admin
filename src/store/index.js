import Vue from 'vue';
import Vuex from 'vuex';
import userAPI from '../API/userAPI';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isLoading: false,
    isLogin: false,
    personData: {},
    error: '',
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = true;
      state.personData = payload;
      if (payload.user_role === 'admin') {
        state.isAdmin = true;
      }
    },
    setError(state, error) {
      state.error = error;
    },
    setLogout(state) {
      state.isLogin = false;
      state.personData = {};
    },
    setLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    login(context, payload) {
      context.commit('setLoading');
      return userAPI.post('/login', payload);
    },
    logout(context) {
      context.commit('setLoading');
      context.commit('setLogout');
      context.commit('stopLoading');
    },
    registerUser(context, payload) {
      context.commit('setLoading');
      return userAPI.post('/register', payload);
    },
  },
});
export default store;
