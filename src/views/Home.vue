<template>
  <div class="home">
    home
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('access_token')
    if (token) next('/')
    else next('/login')
  }
}
</script>
