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
  name: 'Summary',
  components: { Sidebar, Upperbar }
}
</script>

<style scoped>

</style>
