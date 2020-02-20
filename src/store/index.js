import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    serverUrl: 'http://localhost:3000',
    admins: [],
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
    getAdmins (state, params) {
      state.admins = params
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
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: `${context.state.serverUrl}/products`
      })
        .then((result) => {
          this.commit('fetchProducts', { data: result.data.products })
        })
        .catch((err) => console.log(err))
    },
    getCategories (context) {
      return axios({
        method: 'GET',
        url: `${context.state.serverUrl}/category`
      })
    },
    loginAsync (context) {
      return axios({
        method: 'POST',
        url: `${context.state.serverUrl}/admin/login`,
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
          url: `${context.state.serverUrl}/product`,
          data
        })
      } else return null
    },
    updateProductAsync (context) {
      const input = context.state
      if (input.name && input.price && input.stock && input.category) {
        return axios({
          method: 'PUT',
          url: `${context.state.serverUrl}/product/${context.state.id}`,
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
        url: `${context.state.serverUrl}/product/${id}`
      })
    },
    fetchAdmins (context) {
      return axios({
        method: 'GET',
        url: `${context.state.serverUrl}/admins`
      })
    },
    createAdminAsync (context) {
      const input = context.state
      const token = localStorage.getItem('access_token')
      if (input.email && input.password) {
        return axios({
          method: 'POST',
          url: `${context.state.serverUrl}/admin/register`,
          headers: { token },
          data: {
            email: input.email,
            password: input.password
          }
        })
      } else return null
    }
  }
})

export default store
