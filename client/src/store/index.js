import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isAdmin: false,
    isLogin: false,
    productToEdit: [],
    isEdit: false,
    idParams: 0
  },
  mutations: {
    FETCH_PRODUCT (state, data) {
      state.products = data
    },
    ISADMIN (state, data) {
      if (data.role) {
        state.isAdmin = true
      } else {
        state.isAdmin = false
      }
    },
    VERIFY_TOKEN (state, data) {
      console.log(data, 'INI DATA')
      const decoded = jwt.verify(data, process.env.VUE_APP_SECRET)
      console.log(decoded, 'INI DECODE')
      if (decoded.role) {
        state.isAdmin = true
      }
    },
    ISLOGIN (state, data) {
      console.log(data, 'masuk bambang')
      state.isLogin = data
    },
    PRODUCTTOEDIT (state, data) {
      state.productToEdit = data
    },
    ISEDIT (state, data) {
      state.isEdit = data
    },
    IDPARAMS (state, data) {
      state.idParams = data
    }
  },
  actions: {
    fetchProduct (context) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/products'
      })
    },
    setLogin (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url,
          category: payload.category
        },
        headers: {
          token: localStorage.token
        }
      })
    },
    register (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/register',
        data: {
          first_name: payload.first_name,
          address: payload.address,
          email: payload.email,
          password: payload.password,
          role: payload.role
        }
      })
    },
    deleteProduct (context, payload) {
      return axios({
        method: 'delete',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    formEdit (context, payload) {
      return axios({
        method: 'get',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'put',
        url: `http://localhost:3000/products/${payload.id}`,
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url,
          category: payload.category
        },
        headers: {
          token: localStorage.token
        }
      })
    }
  },
  modules: {
  }
})
