<template>
  <div id="homePage">
    <Loading v-if="isLoading" />
    <div id="home-navbar" v-else>
      <Upperbar />
      <Sidebar />
      <section id="main-content">asdasdas</section>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Upperbar from '../components/upperbar.vue'
import Loading from '../components/loading.vue'

export default {
  data () { return { isLoading: false } },
  name: 'Home',
  components: { Sidebar, Upperbar, Loading },
  methods: {
    stillLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  },
  created () { this.stillLoading() }
}
</script>

<style scoped>

div#homePage {
    width: 100vw;
    height: 100vh;
}

div#home-navbar {
    position: relative;
}

img {
  width: 100%;
}

</style>
