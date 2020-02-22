<template>
  <div id="app">
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<<<<<<< HEAD
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
<<<<<<< HEAD
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
=======
>>>>>>> ef6443aa167e1870c8b7f6f665dd7f8f1a75dc42
</style>
