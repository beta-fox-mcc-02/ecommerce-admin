<template>
  <div class="d-flex">
    <div class="dashBoard" v-if="addingProduct === false">

      <div class="col">
        <div class="row">
          <ChartSelling></ChartSelling>
          <div class="col p-2 ">
            <div class="jumbotron">
              <h1 class="display-5" >Add new product</h1>
              <p></p>
              <a @click="addProduct" class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>
        </div>
          <h3>Last Product Added</h3>
          <button @click="products" type="button" class="btn btn-link">See more products</button>
        <div class="row justify-content-center">
          <!-- <LastItemAdded></LastItemAdded> -->
        </div>
      </div>
    </div>
    <AddProduct v-else-if="addingProduct === true"></AddProduct>
  </div>
</template>

<script>

import ChartSelling from '../components/ChartSelling.vue'
// import LastItemAdded from '../components/LastItemAdded.vue'
import AddProduct from '../components/AddProduct.vue'

export default {
  name: 'LandingPage',
  components: {
    ChartSelling,
    // LastItemAdded,
    AddProduct
  },
  methods: {
    addProduct () {
      console.log('bisa nih addnyaaaaaaa====================')
      this.$store.commit('ADD_PRODUCT', true)
    },
    products () {
      this.$router.push('/products')
    }
  },
  computed: {
    addingProduct () {
      return this.$store.state.addProduct
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 500px;
  background-color: blue;
}
</style>
