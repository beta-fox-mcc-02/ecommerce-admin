<template>
  <div class="all-container">
    <div class="nav">
      <Nav />
    </div>

    <div class="content">
      dashboard
      {{ products }}
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
import Nav from '../components/Nav'

export default {
  name: 'Dashboard',
  data () {
    return {
      products: []
    }
  },
  components: {
    Nav
  },
  methods: {
    fetchAllProducts () {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.products = data.data
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (this.getIsLogin) {
      this.fetchAllProducts()
    }
  }
}
</script>

<style>

</style>
