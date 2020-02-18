<template>
  <div id="nav">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    or
    <a v-on:click="logout" style="cursor: pointer">logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

div#nav {
  background-color: #189a18;
  padding: 1vh;
  text-align: right
}

a {
  color: white;
  margin: 0 1rem;
}

</style>>
