import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios/config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: false
  },
  mutations: {
    SUCCESS_AUTH(state) {
      state.isAuth = true;
    },
    LOGOUT(state) {
      state.isAuth = false;
    }
  },
  actions: {
    registerAdmin(context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      });
    },
    loginAdmin(context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: payload
      });
    },
    createProduct(context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      });
    }
  }
});

export default store;

