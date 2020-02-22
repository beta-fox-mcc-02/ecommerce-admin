<template>
  <div>
    <div v-if="loadingStatus">
      <h3>PRODUCT LIST</h3>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Genre</th>
            <th>Category</th>
            <th>Image Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Product
          v-for="product in listProduct"
          :key="product.id"
          :product="product"></Product>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1>NOW LOADING</h1>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'ProductList',
  data () {
    return {
      showModal: true
    }
  },
  components: {
    Product
  },
  methods: {
    fetchProduct () {
      // console.log('fetch data')
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    listProduct () {
      return this.$store.state.products
    },
    loadingStatus () {
      return this.$store.state.loadingStatus
    }
  },
  created () {
    this.$store.commit('SET_LOADING_STATUS', false)
    this.showModal = true
    this.fetchProduct()
    if (this.$store.state.message === 'login success') {
      this.$store.commit('SET_MESSAGE', { msg: '', status: null })
    }
  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>
