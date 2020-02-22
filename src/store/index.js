import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: null,
    isAdmin: null,
    message: '',
    products: [],
    alertStatus: null,
    product: '',
    productId: null,
    loadingStatus: null,
    categories: [],
    category: '',
    categoryId: null,
    users: []
  },
  getters: {
    getAlert: state => {
      // console.log(state.alertStatus)
      return state.alertStatus ? 'alert-success' : 'alert-danger'
    }
  },
  mutations: {
    SET_ISLOGIN (state, status) {
      state.isLogin = status
    },
    SET_ADMIN (state) {
      state.isAdmin = true
    },
    FETCH_PRODUCT (state, data) {
      state.products = data
    },
    FETCH_CATEGORY (state, data) {
      state.categories = data
    },
    FETCH_USER (state, data) {
      state.users = data
    },
    SET_MESSAGE (state, message) {
      state.message = message.msg
      state.alertStatus = message.status
    },
    SET_PRODUCT (state, product) {
      state.product = product
    },
    SET_PRODUCT_ID (state, id) {
      state.productId = id
    },
    SET_LOADING_STATUS (state, status) {
      state.loadingStatus = status
    },
    SET_CATEGORY (state, category) {
      state.category = category
    },
    SET_CATEGORY_ID (state, id) {
      state.categoryId = id
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          RoleId: 1
        }
      })
    },
    fetchProduct ({ commit, dispatch, state }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('FETCH_PRODUCT', data.data)
          commit('SET_LOADING_STATUS', true)
        })
        .catch(err => {
          commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    },
    createProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          genre: payload.genre,
          category: payload.category,
          image_url: payload.image_url
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    findOneProduct ({ commit, dispatch, state }, id) {
      // console.log(payload)
      return axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    updateProduct (context, data) {
      console.log(data, '-masuk update store ')
      return axios({
        method: 'PUT',
        url: `/products/${data.id}`,
        data: {
          name: data.payload.name,
          price: data.payload.price,
          stock: data.payload.stock,
          genre: data.payload.genre,
          CategoryId: data.payload.CategoryId,
          image_url: data.payload.image_url
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct (context, id) {
      // console.log(id)
      // console.log('deleteproduct -------- store')
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchCategory ({ commit, dispatch, state }) {
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('FETCH_CATEGORY', data.data)
          commit('SET_LOADING_STATUS', true)
        })
        .catch(err => {
          commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    },
    createCategory (context, payload) {
      return axios({
        method: 'POST',
        url: '/categories',
        data: {
          name: payload.name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    findOneCategory ({ commit, dispatch, state }, id) {
      // console.log(payload)
      return axios({
        method: 'GET',
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    updateCategory (context, data) {
      return axios({
        method: 'PUT',
        url: `/categories/${data.id}`,
        data: {
          name: data.payload.name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteCategory (context, id) {
      return axios({
        method: 'DELETE',
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchUser ({ commit, dispatch, state }) {
      axios({
        method: 'GET',
        url: '/users',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('FETCH_USER', data.data)
        })
        .catch(err => {
          commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  modules: {
  }
})
