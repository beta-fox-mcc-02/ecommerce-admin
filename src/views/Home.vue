<template>
  <div>
    <Loading v-if="isLoading" />
    <div id="homePage" v-else>
      <Upperbar />
      <Sidebar />
      <img src="welcome.jpg" />
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
    position: relative;
}

img {
  width: 100%;
}

</style>
