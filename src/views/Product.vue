<template>
  <div>
    <NavBar />
    <AsideBar />
    <ProductManagement />
  </div>
</template>

<script>
import AsideBar from '../components/AsideBar.vue'
import NavBar from '../components/NavBar.vue'
import ProductManagement from '../components/ProductManagement.vue'

export default {
  name: 'Product',
  components: { AsideBar, NavBar, ProductManagement }
}
</script>

<style scoped>

</style>
