<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <CustomAddProdModal v-if="addProduct"/>
    <LoginModal v-if="!isLogin"/>
    <router-view />
  </div>
</template>

<script>
import CustomAddProdModal from '@/components/addProductModal'
import LoginModal from '@/components/login'
import { mapState } from 'vuex'

export default {
  components: {
    CustomAddProdModal,
    LoginModal
  },
  computed: {
    addProduct () {
      return this.$store.state.addProduct
    },
    // isLogin () {
    //   return localStorage.access_token
    // },
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    checkToken () {
      if (localStorage.access_token) {
        const payload = {
          token: localStorage.access_token,
          username: localStorage.username
        }
        this.$store.commit('SET_USER_CREDENTIALS', payload)
        this.$store.commit('SET_LOGIN', true)
      }
    },
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.checkToken()
    this.fetchProduct()
    // console.log(this.$store.state.products)
  }
}
</script>

<style>
body {
  background: grey;
  /* width: 100%; */
  /* height: 100%; */
  /* max-height: 100vh; */
  /* overflow: hidden; */
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
