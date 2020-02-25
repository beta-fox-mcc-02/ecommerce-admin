<template>
  <div id="homePage">
    <Loading v-if="isLoading" />
    <div id="home-navbar" v-else>
      <NavBar />
      <AsideBar />
      <section id="main-content">
        <SalesChart />
      </section>
    </div>
  </div>
</template>

<script>
import AsideBar from '../components/AsideBar.vue'
import NavBar from '../components/NavBar.vue'
import Loading from '../components/Loading.vue'
import SalesChart from '../components/SalesChart.vue'

export default {
  data () { return { isLoading: false } },
  name: 'Home',
  components: { AsideBar, NavBar, Loading, SalesChart },
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

section#main-content {
    margin-left: 23vw;
    margin-top: 3vh;
}

img {
  width: 100%;
}

</style>
