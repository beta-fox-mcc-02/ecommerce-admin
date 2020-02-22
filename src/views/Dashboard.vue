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
              <td>{{product.image_url}}</td>
              <td align="center">{{product.price}}</td>
              <td align="center">{{product.stock}}</td>
              <td align="center" class="action-area">
                <i class="fas fa-pen btn"></i>
                <i class="fas fa-trash btn"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'

export default {
  name: 'Dashboard',
  data () {
    return {
      product: false
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
          this.$store.commit('SET_PRODUCTS', data.data)
          if (data.data.length) {
            this.product = true
          }
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    },

    getProducts () {
      return this.$store.state.products
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
  display: block;
  table-layout: fixed;
  max-width: 100%;
  overflow: auto;
}

.product-table thead{
  text-align: center
}

.product-table tbody tr td{
  overflow: hidden;
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
</style>
