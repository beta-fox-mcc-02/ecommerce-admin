import Vue from 'vue'
import Vuex from 'vuex'
import ecommerce from '../api/ecommerce'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminName: '',
    adminEmail: '',
    categories: [],
    products: [],
    adminMenu: [
      { title: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
      { title: 'Shoes', icon: 'storage', route: '/admin/shoes' },
      { title: 'Categories', icon: 'category', route: '/admin/categories' }
    ],
    message: ''
  },
  mutations: {
    setAdminName (state, payload) {
      state.adminName = payload
    },
    setAdminEmail (state, payload) {
      state.adminEmail = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      return ecommerce.post('/login', payload)
    },
    getAllCategories ({ commit }) {
      ecommerce.get('/category')
        .then(({ data }) => {
          commit('setCategories', data.data)
        })
        .catch(err => {
          commit('setMessage', err)
        })
    },
    getAllShoes ({ commit }) {
      ecommerce.get('/product')
        .then(({ data }) => {
          commit('setProducts', data.data)
        })
        .catch(err => {
          commit('setMessage', err)
        })
    },
    getOneShoe ({ commit }, payload) {
      return ecommerce.get(`/product/${payload}`)
    },
    submitNewShoe ({ commit }, payload) {
      return ecommerce.post('/product', payload, {
        headers: {
          access_token: localStorage.admin_token
        }
      })
    },
    updateShoe ({ commit }, payload) {
      return ecommerce.put(`/product/${payload.id}`, {
        name: payload.name,
        description: payload.description,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock,
        categories: payload.categories
      }, {
        headers: {
          access_token: localStorage.admin_token
        }
      })
    },
    deleteShoe ({ commit }, payload) {
      return ecommerce.delete(`/product/${payload}`, {
        headers: {
          access_token: localStorage.admin_token
        }
      })
    }
  }
})
