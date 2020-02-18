<template>
  <div class="home">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'

export default {
  name: 'Home',
  components: { Sidebar },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('access_token')
    if (!token) next('/login')
    else next()
  }
}
</script>
