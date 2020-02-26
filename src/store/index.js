import Vue from 'vue';
import Vuex from 'vuex';
import userAPI from '../API/userAPI';
import productAPI from '../API/productAPI';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isMaster: false,
    isLoading: false,
    isLogin: false,
    personData: {},
    listOfAdmins: [],
    listOfProducts: [],
    error: '',
    successMessage: '',
    showSuccessAlert: false,
  },
  getters: {
    mostExpensive(state) {
      const clone = state.listOfProducts.slice(0);
      return `Rp. ${clone.sort((a, b) => b.price - a.price)[0].price.toLocaleString()}`;
    },
  },
  mutations: {
    showAlert(state, payload) {
      state.successMessage = payload.successMessage;
      state.showSuccessAlert = true;
      setTimeout(() => {
        state.showSuccessAlert = false;
      }, payload.interval);
    },
    setLogin(state, payload) {
      state.isLogin = true;
      state.personData = payload;
      if (payload.user_role === 'master') {
        state.isMaster = true;
      }
    },
    setError(state, error) {
      state.error = error;
    },
    setLogout(state) {
      state.isLogin = false;
      state.personData = {};
      state.isMaster = false;
    },
    setLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setListOfAdmins(state, payload) {
      state.listOfAdmins = payload;
    },
    setListOfProducts(state, payload) {
      state.listOfProducts = payload;
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
    fetchListOfAdmins(context) {
      context.commit('setLoading');
      userAPI.get('/findUser?role=admin')
        .then((response) => {
          context.commit('setListOfAdmins', response.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          store.commit('stopLoading');
        });
    },
    deletePerson(context, id) {
      context.commit('setLoading');
      return userAPI.delete(`/findUser/${id}`, {
        headers: {
          token: localStorage.token,
        },
      });
    },
    fetchListOfProducts(context) {
      context.commit('setLoading');
      productAPI.get()
        .then((response) => {
          context.commit('setListOfProducts', response.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          context.commit('stopLoading');
        });
    },
    addProduct(context, payload) {
      context.commit('setLoading');
      return productAPI.post('/', payload, {
        headers: {
          token: localStorage.token,
        },
      });
    },
    deleteProduct(context, id) {
      context.commit('setLoading');
      return productAPI.delete(`/${id}`, {
        headers: {
          token: localStorage.token,
        },
      });
    },
    editProduct(context, payload) {
      console.log(payload);
      context.commit('setLoading');
      return productAPI.put(`/${payload.id}`, payload, {
        headers: {
          token: localStorage.token,
        },
      });
    },
  },
});
export default store;
