import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isAdmin: false,
    error: {},
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
    ERROR (state, err) {
      state.error = err
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
      axios({
        method: 'get',
        url: 'http://localhost:3000/products'
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCT', data)
        })
        .catch(err => {
          context.commit('ERROR', err)
        })
    },
    login (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          router.push({ path: '/admin' })
          context.commit('ISADMIN', data)
          context.commit('ISLOGIN', true)
        })
        .catch(err => {
          console.log(err)
          context.commit('ERROR', err)
        })
    },
    addProduct (context, payload) {
      axios({
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
        .then(data => {
          router.push({
            path: '/admin/list-products'
          })
          context.dispatch('fetchProduct')
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      // const { first_name, address, email, password, role } = payload
      axios({
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
        .then(({ user }) => {
          router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(info => {
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    formEdit (context, payload) {
      axios({
        method: 'get',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('PRODUCTTOEDIT', data)
          context.commit('ISEDIT', true)
          context.commit('IDPARAMS', payload)
          router.push({ path: '/admin/edit-products' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'put',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
        .then()
    }
  },
  modules: {
  }
})
