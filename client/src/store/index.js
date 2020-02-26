import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "../api/axiosInstance";
export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    login: false,
    loading: false
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
      // console.log(state.products, 'dari mutation');
    },
    setBanner(state, payload) {
      state.banners = payload;
      console.log(state.banners, "dari mutation");
    },
    setLogin(state, payload) {
      if (state.login == true) {
        state.login = false;
      } else {
        state.login = true;
      }
    },
    SET_LOGIN(state, payload) {
      state.login = payload;
    },
    SET_LOADING(state, payload){
      state.loading = payload
    }
  },
  actions: {
    fetchProducts(context) {
      context.commit('SET_LOADING', true)
      axios({
        method: "get",
        url: "/product"
      })
        .then(({ data }) => {
          // console.log(data, 'ini dari store');
          
          context.commit("setProducts", data);
          context.commit('SET_LOADING', false)

        })
        .catch(err => {
          console.log(err);
          context.commit('SET_LOADING', false)

        });
    },
    fetchBanners(context) {
      context.commit('SET_LOADING', true)
      axios({
        method: "get",
        url: "/banner"
      })
        .then(({ data }) => {
          // console.log(data, "ini dari store");
          context.commit("setBanner", data);
          context.commit('SET_LOADING', false)

        })
        .catch(err => {
          console.log(err);
          context.commit('SET_LOADING', false)

        });
    }
  },
  modules: {}
});
