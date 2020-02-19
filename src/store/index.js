import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // products: [{
    //   id: 1,
    //   name: 'Smartphone 1',
    //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
    //   category: 'Smartphone',
    //   price: '100000',
    //   stock: 10,
    //   imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    // }, {
    //   id: 2,
    //   name: 'Komputer 1',
    //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
    //   category: 'Computer',
    //   price: '200000',
    //   stock: 10,
    //   imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    // }, {
    //   id: 3,
    //   name: 'Komputer 2',
    //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
    //   category: 'Computer',
    //   price: '300000',
    //   stock: 10,
    //   imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    // }],
    products: [],
    filteredProducts: [],
    addProduct: false,
    error: {},
    notification: '',
    access_token: '',
    isLogin: false,
    username: '',
    oneProduct: {}
  },
  mutations: {
    FETCH_PRODUCTS (state, data) {
      state.products = data
    },
    FETCH_ONE_PRODUCT (state, data) {
      state.oneProduct = data.product
    },
    SET_FILTERED_PRODUCTS (state, data) {
      state.filteredProducts = data
    },
    SHOW_ADD_FORM (state, data) {
      state.addProduct = data
    },
    SET_ERROR (state, data) {
      state.error = data
    },
    SET_NOTIFICATION (state, data) {
      state.notification = data
    },
    SET_USER_CREDENTIALS (state, data) {
      state.access_token = data.token
      state.username = data.username
    },
    SET_LOGIN (state, data) {
      state.isLogin = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: process.env.VUE_APP_BASEURL + 'product'
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCTS', data.products)
          context.commit('SET_FILTERED_PRODUCTS', data.products)
          context.commit('SHOW_ADD_FORM', false)
        })
        .catch(err => {
          context.commit('SET_ERROR', err)
        })
    },

    fetchOneProduct (context, product) {
      return axios({
        method: 'get',
        url: process.env.VUE_APP_BASEURL + 'product/' + product.id
      })
    },

    addProduct (context, formData) {
      return axios
        .post(process.env.VUE_APP_BASEURL + 'product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            access_token: this.state.access_token
          }
        })
    },

    editProduct (context, data) {
      const { formData, query } = data
      return axios
        .put(process.env.VUE_APP_BASEURL + 'product/' + query.id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            access_token: this.state.access_token
          }
        })
    },

    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: process.env.VUE_APP_BASEURL + 'product/' + id,
        headers: {
          access_token: this.state.access_token
        }
      })
    },

    login (context, data) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASEURL + 'login',
        data: {
          identification: data.identification,
          password: data.password
        }
      })
    },

    register (context, data) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASEURL + 'register',
        data: {
          username: data.username,
          email: data.email,
          password: data.password,
          isAdmin: data.isAdmin
        }
      })
    }
  },

  modules: {
  },
  getters: {
    getFilteredProducts (state, words) {
      const regex = new RegExp(words, 'gi')
      return state.products.filter(product => product.name.match(regex))
    }
  }
})
