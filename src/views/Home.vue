<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="products">
      <Products v-for="product in products" :key="product.id"
      :product='product'/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
/* div {
  background-image: url('https://i.pinimg.com/originals/eb/09/85/eb098576a0c618c99ee86406a8815c64.png');
  background-size: cover
} */
</style>
