<template>
  <div>
    <Upperbar />
    <Sidebar />
    <Management />
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Upperbar from '../components/upperbar.vue'
import Management from '../components/managementComps.vue'

export default {
  name: 'Summary',
  components: { Sidebar, Upperbar, Management }
}
</script>

<style scoped>

</style>
