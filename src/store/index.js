import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    categories: [],
    email: '',
    password: '',
    id: '',
    name: '',
    price: '',
    stock: '',
    imageUrl: '',
    category: ''
  },
  mutations: {
    fetchProducts (state, obj) {
      state.products = obj.data
    },
    setEmail (state, params) {
      state.email = params
    },
    setPassword (state, params) {
      state.password = params
    },
    editAbleData (state, obj) {
      state.id = obj.product.id
      state.name = obj.product.name
      state.price = obj.product.price
      state.stock = obj.product.stock
      state.imageUrl = obj.product.imageUrl
      state.categories = obj.categories
    },
    setName (state, params) {
      state.name = params
    },
    setPrice (state, params) {
      state.price = params
    },
    setStock (state, params) {
      state.stock = params
    },
    setImageUrl (state, params) {
      state.imageUrl = params
    },
    setCategory (state, params) {
      state.category = params
    },
    setCategories (state, params) {
      state.categories = params.data
    },
    unsetEmailPassword (state) {
      state.email = ''
      state.password = ''
    },
    unsetAll (state) {
      state.email = ''
      state.password = ''
      state.id = ''
      state.name = ''
      state.price = ''
      state.stock = ''
      state.imageUrl = ''
      state.category = ''
    }
  },
  actions: {
    fetchProducts () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then((result) => {
          this.commit('fetchProducts', { data: result.data.products })
        })
        .catch((err) => console.log(err))
    },
    getCategories () {
      return axios({
        method: 'GET',
        url: 'http://localhost:3000/category'
      })
    },
    loginAsync (context) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/login',
        data: {
          email: context.state.email,
          password: context.state.password
        }
      })
    },
    createProductAsync (context) {
      const input = context.state
      if (input.name && input.price && input.stock && input.category) {
        const data = {
          name: input.name,
          price: input.price,
          stock: input.stock,
          imageUrl: input.imageUrl,
          category: input.category
        }
        return axios({
          method: 'POST',
          url: 'http://localhost:3000/product',
          data
        })
      } else return null
    },
    updateProductAsync (context) {
      const input = context.state
      if (input.name && input.price && input.stock && input.category) {
        return axios({
          method: 'PUT',
          url: `http://localhost:3000/product/${context.state.id}`,
          data: {
            name: input.name,
            price: input.price,
            stock: input.stock,
            imageUrl: context.state.imageUrl,
            category: input.category
          }
        })
      } else return null
    },
    deleteAsync (context, id) {
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/product/${id}`
      })
    }
  }
})

export default store
