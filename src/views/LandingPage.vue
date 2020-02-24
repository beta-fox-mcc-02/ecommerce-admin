<template>
  <div>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Carousel
  },
  computed: {
    currentNav () {
      return this.$store.state.curentNav
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.token) {
      next('/dashboard')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
