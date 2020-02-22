<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <b-spinner label="Spinning" v-if="loading"></b-spinner>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Navbar
  },
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
  created() {
    if (localStorage.token) {
      this.$store.commit('afterAuth')
      if (this.$store.state.products.length == 0) {
        this.$store.dispatch('fetchProduct')
      }
    } else {
      this.$store.commit('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
