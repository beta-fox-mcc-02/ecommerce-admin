<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="checkAdmin" to="/admin">Admin</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    checkAdmin () {
      return this.$store.state.isAdmin
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.commit('VERIFY_TOKEN', localStorage.token)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #434e52;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
