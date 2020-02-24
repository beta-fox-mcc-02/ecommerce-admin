<template>
  <div>
    <NavbarAdmin></NavbarAdmin>
    <Product></Product>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Dasboard',
  components: {
    NavbarAdmin,
    Product
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.token) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
