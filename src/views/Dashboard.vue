<template>
  <div class="all-container">

    <div class="nav">
      <Nav />
    </div>

    <div class="content">
      <SideBar />
      <div class="col-10 manage-container">
        <table class="table table-hover product-table">
          <thead class="table-borderless">
            <tr>
              <td>
                <router-link to="/addProduct">
                  <i class="fas fa-plus-square btn-add-product btn"></i>
                </router-link>
              </td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Image Url</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="product">
            <tr v-for="product in getProducts" :key="product.id">
              <td align="center">{{product.id}}</td>
              <td>{{product.name}}</td>
              <td align="center">
                <img :src="product.image_url" class="product-img">
              </td>
              <td align="center">{{product.price}}</td>
              <td align="center">{{product.stock}}</td>
              <td align="center">
                <i class="fas fa-pen btn" @click="editProductForm(product.id)"></i>
                <i class="fas fa-trash btn" @click="deleteProduct(product.id)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="loading-info" v-if="getIsLoading">
      <h1>loading...</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from '../config/axios'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'

export default {
  name: 'Dashboard',
  data () {
    return {
      product: false,
      errorMessage: ''
    }
  },
  components: {
    Nav,
    SideBar
  },
  methods: {
    fetchAllProducts () {
      this.$store.dispatch('fetchAllProducts')
        .then(({ data }) => {
          this.$store.commit('SET_IS_LOADING', false)
          this.$store.commit('SET_PRODUCTS', data.data)
          if (data.data.length) {
            this.product = true
          }
        })
        .catch(err => {
          this.$store.commit('SET_IS_LOADING', false)
          this.errorMessage = err.response.data
        })
    },

    editProductForm (id) {
      this.$store.commit('SET_ID_TO_EDIT', id)
      this.$store.dispatch('getProductById')
        .then(({ data }) => {
          this.$store.commit('SET_PRODUCT_TO_EDIT', data.data)
          this.$router.push({ name: 'EditProduct' })
        })
        .catch(({ response }) => {
          this.errorMessage = response.data
        })
    },

    deleteProduct (id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          return this.$store.dispatch('fetchAllProducts')
        })
        .then(({ data }) => {
          this.$store.commit('SET_IS_LOADING', false)
          this.$store.commit('SET_PRODUCTS', data.data)
          if (data.data.length) {
            this.product = true
          }
        })
        .catch(err => {
          this.$store.commit('SET_IS_LOADING', false)
          this.errorMessage = err.response.data
        })
    }
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    },

    getProducts () {
      return this.$store.state.products
    },

    getIsLoading () {
      return this.$store.state.isLoading
    }
  },
  created () {
    if (this.getIsLogin) {
      this.fetchAllProducts()
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  height: 90%;
  justify-content: center;
}

.manage-container {
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.product-table {
  /* display: block; */
  table-layout: fixed;
  /* width: 1000px; */
  /* max-width: 100%; */
  overflow: auto;
}

.product-table thead{
  text-align: center
}

.product-table tbody tr td{
  overflow: hidden;
}

.btn {
  padding: 0;
  margin: 5px;
}

.btn:hover {
  cursor: pointer;
}

.btn-add-product {
  font-size: 2rem;
}

.action-area {
  display: flex;
  flex-wrap: nowrap;
}

.loading-info {
  position: absolute;
  top: 50%;
  left: 50%;
}

.product-img {
  width: 100px;
}
</style>
