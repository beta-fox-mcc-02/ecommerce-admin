<template>
  <div>
    <Upperbar />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Upperbar from '../components/upperbar.vue'

export default {
  name: 'Home',
  components: { Sidebar, Upperbar }
}
</script>

<style scoped>

</style>
