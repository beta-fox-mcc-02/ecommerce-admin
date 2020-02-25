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

<style>

*{
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
}

a{
  color: black;
  text-decoration: none;
}

button, a {
  cursor: pointer;
}

</style>
