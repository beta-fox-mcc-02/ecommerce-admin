<template>
  <div>
    <Upperbar />
    <Sidebar />
    <Summaries />
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Upperbar from '../components/upperbar.vue'
import Summaries from '../components/summaries.vue'

export default {
  name: 'Summary',
  components: { Sidebar, Upperbar, Summaries }
}
</script>

<style scoped>

</style>
