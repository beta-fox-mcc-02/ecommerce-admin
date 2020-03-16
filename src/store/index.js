import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const serverUrl = 'https://mysterious-beach-02436.herokuapp.com'
// const serverUrl = 'http://localhost:3000'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    admins: [],
    products: [],
    categories: [],
    chartData: [],
    banners: [],
    email: '',
    password: '',
    id: '',
    name: '',
    price: '',
    stock: '',
    imageUrl: '',
    category: '',
    bannerUrl: ''
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
    setChartData (state, params) {
      state.chartData = params
    },
    setBanner (state, value) {
      state.bannerUrl = value
    },
    banners (state, value) {
      state.banners = value
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
      state.bannerUrl = ''
    }
  },
  actions: {
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: `${serverUrl}/products`,
        headers: { token }
      })
        .then((result) => {
          this.commit('fetchProducts', { data: result.data.products })
        })
        .catch(() => {})
    },
    getCategories (context) {
      return axios({
        method: 'GET',
        url: `${serverUrl}/categories`
      })
    },
    loginAsync ({ state }) {
      if (state.email && state.password) {
        return axios({
          method: 'POST',
          url: `${serverUrl}/admins/login`,
          data: {
            email: state.email,
            password: state.password
          }
        })
      } else return false
    },
    createProductAsync (context) {
      const token = localStorage.getItem('access_token')
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
          url: `${serverUrl}/products`,
          headers: { token },
          data
        })
      } else return null
    },
    updateProductAsync (context) {
      const token = localStorage.getItem('access_token')
      const input = context.state
      if (input.name && input.price && input.stock && input.category) {
        return axios({
          method: 'PUT',
          url: `${serverUrl}/products/${context.state.id}`,
          headers: { token },
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
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'DELETE',
        url: `${serverUrl}/products/${id}`,
        headers: { token }
      })
    },
    fetchAdmins (context) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `${serverUrl}/admins`,
        headers: { token }
      })
    },
    createAdminAsync (context) {
      const input = context.state
      const token = localStorage.getItem('access_token')
      if (input.email && input.password) {
        return axios({
          method: 'POST',
          url: `${serverUrl}/admins/register`,
          headers: { token },
          data: {
            email: input.email,
            password: input.password
          }
        })
      } else return null
    },
    postBannerAsync ({ state }) {
      const url = state.bannerUrl
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: `${serverUrl}/banners`,
        headers: { token },
        data: { url }
      })
    },
    getBannersAsync ({ state, commit }) {
      axios({
        method: 'GET',
        url: `${serverUrl}/banners`
      })
        .then(({ data }) => {
          commit('banners', data)
        })
        .catch(() => {})
    }
  }
})

export default store
