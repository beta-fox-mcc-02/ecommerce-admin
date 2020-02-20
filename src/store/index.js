import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios/config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: false,
    items: []
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
    },
    fetchProduct() {
      return axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      });
    },
    deleteProduct(context, id) {
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      });
    },
    updateProduct(context, payload) {
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

