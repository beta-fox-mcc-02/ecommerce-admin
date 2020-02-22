import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from '../api/axiosInstance'
export default new Vuex.Store({
  state: {
    products:[],
    banners:[]
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
      // console.log(state.products, 'dari mutation');
    },
    setBanner(state, payload){
      state.banners = payload
      console.log(state.banners, 'dari mutation');
    }
  },
  actions: {
    fetchProducts(context){
      axios({
        method:'get',
        url:'/product'
      })
      .then(({data}) =>{
        // console.log(data, 'ini dari store');
        
        context.commit('setProducts', data)
      })
      .catch(err =>{
        console.log(err);
        
      })
    },
    fetchBanners(context){
      axios({
        method:'get',
        url:'/banner'
      })
      .then(({data}) =>{
        console.log(data, 'ini dari store');
        
        context.commit('setBanner', data)
      })
      .catch(err =>{
        console.log(err);
        
      })
    }
  },
  modules: {
  }
})
