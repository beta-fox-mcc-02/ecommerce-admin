<template>
  <div>
    <Upperbar />
    <Sidebar />
    <MainProduct />
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Upperbar from '../components/upperbar.vue'
import MainProduct from '../components/mainProduct.vue'

export default {
  name: 'Product',
  components: { Sidebar, Upperbar, MainProduct }
}
</script>

<style scoped>

</style>
