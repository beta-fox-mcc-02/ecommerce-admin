<template>
  <div>
    <Navbar />
    <AsideBar />
    <Management />
  </div>
</template>

<script>
import AsideBar from '../components/AsideBar.vue'
import Navbar from '../components/NavBar.vue'
import Management from '../components/Management.vue'

export default {
  name: 'Summary',
  components: { AsideBar, Navbar, Management }
}
</script>

<style scoped>

</style>
