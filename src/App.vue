<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$router.push('/')
    } else this.$router.push('/login')
  }
}
</script>

<style scoped>

</style>
