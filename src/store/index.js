import Vue from 'vue';
import Vuex from 'vuex';
import userAPI from '../api/userAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: '',
    isLogin: false,
    products: [],
    errors: [],
    message: '',
  },
  mutations: {
    SET_IDTOKEN(state, payload) {
      state.idToken = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    SET_ISLOGIN(state, status) {
      state.isLogin = status;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_ERRORS(state, payload) {
      state.errors = payload;
    },
  },
  actions: {
    login(context, payload) {
      return userAPI.post('/login', { email: payload.email, password: payload.password });
    },
    logout() {
      this.state.isLogin = false;
      this.state.idToken = '';
      localStorage.removeItem('access_token');
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
    deleteProduct(context, id) {
      return userAPI({
        method: 'DELETE',
        url: `/product/${id}`,
        headers: { access_token: localStorage.getItem('access_token') },
      });
    },
    addProduct(context, payload) {
      return userAPI({
        method: 'POST',
        url: '/product',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
        },
      });
    },
    editProduct(context, payload) {
      return userAPI({
        method: 'PATCH',
        url: `/product/${payload.id}`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
        },
      });
    },
  },
  modules: {
  },
});
