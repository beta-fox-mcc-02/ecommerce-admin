import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios/config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: false,
    items: [],
    loading: false
  },
  mutations: {
    SUCCESS_AUTH(state) {
      state.isAuth = true;
    },
    LOGOUT(state) {
      state.isAuth = false;
    },
    SET_ITEMS(state, payload) {
      state.items = payload;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    }
  },
  actions: {
    registerAdmin(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      });
    },
    loginAdmin(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'POST',
        url: '/login',
        data: payload
      });
    },
    createProduct(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      });
    },
    fetchProduct() {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      });
    },
    deleteProduct(context, id) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      });
    },
    updateProduct(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: 'www.facebook.com',
          price: payload.price,
          stock: payload.stock
        }
      });
    }
  }
});

export default store;

