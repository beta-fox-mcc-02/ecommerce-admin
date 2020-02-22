import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Toastify from 'toastify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: '',
    isLogin: false,
    addProduct: false,
    items: [],
    editData: {
      id: '',
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  mutations: {
    LOGIN (state, token) {
      console.log('masuk nih seharusnya')
      state.isLogin = token
    },
    ADD_PRODUCT (state, status) {
      state.addProduct = status
    },
    FETCH_DATA (state, items) {
      state.items = items
    },
    EDIT_DATA (state, data) {
      state.editData = data
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload, 'yang terbaru loh ini')
      return axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: payload
      })
    },
    register (context, payload) {
      console.log(payload)
      return axios({
        url: 'http://localhost:3000/registerAdmin',
        method: 'post',
        data: payload
      })
      // .then(userRegistered => {
      //   console.log(userRegistered)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    },
    addProduct (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock,
          RoleId: payload.RoleId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
      // .then(product => {
      //   console.log('datanya berhasil di add loh0-----', product)
      //   context.commit('ADD_PRODUCT', true)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    },
    fetchData (context) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
      // .then(items => {
      //   context.commit('FETCH_DATA', items.data.data)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    },
    fetchEditData (context, id) {
      console.log(id, 'ini idnyaaaaaaaaa')
      return axios({
        method: 'get',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      // .then(({ data }) => {
      //   console.log(data, 'ini datanyaaaaaaa====================')
      //   context.commit('EDIT_DATA', data)
      // })
      // .catch(err => {
      //   console.log('masuknya ke errorrrrr')
      //   console.log(err)
      // })
    },
    editData (context, dataEditProduct) {
      console.log(dataEditProduct)
      return axios({
        method: 'put',
        url: `http://localhost:3000/products/${dataEditProduct.id}`,
        data: dataEditProduct,
        headers: {
          access_token: localStorage.access_token
        }
      })
      // .then(editData => {
      //   console.log('berhasil edit iyey')
      //   console.log(editData)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    },
    deleteData (context, id) {
      console.log('masuk niiiih idnyooo', id)
      return axios({
        method: 'delete',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    error (context, message) {
      Toastify({
        text: message,
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'left', // `left`, `center` or `right`
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {} // Callback after click
      }).showToast()
    }
  },
  modules: {
  }
})
