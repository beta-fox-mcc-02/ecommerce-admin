<template>
  <div id="products">
    <h1>Collection</h1>
    <div class="card-product">
      <Card  id="card-item" v-for="item in products" :key="item.id"></Card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: "Product",
  component : {
    Card
  },
  data() {
    return {
      products = []
    }
  },
  computed : {
    fetch() {
      this.products = this.$store.products
    }
  }

}
</script>

<style>

</style>