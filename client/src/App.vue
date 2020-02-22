<template>
  <div>
    <Navbar/>
    <div id="body">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar_Admin.vue'

export default {
  data () {
    return {}
  },
  components: {
    Navbar
  }
}
</script>

<style>
</style>
