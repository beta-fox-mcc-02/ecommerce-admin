<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left">
        LOGO E-COMMERCE
      </div>
      <div class="nav-center">
        <router-link class="content" to="/admin">Dashboard</router-link>
      </div>
      <div class="nav-right">
        <router-link class="content" v-if="!checkLogin" to="/login">Login</router-link>
        <router-link class="content" v-if="!checkLogin" to="/register">Register</router-link>
        <router-link @click.native="logout" v-if="checkLogin" class="content" to="/login">Logout</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    checkAdmin () {
      return this.$store.state.isAdmin
    },
    checkLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.commit('VERIFY_TOKEN', localStorage.token)
      this.$store.commit('ISLOGIN', true)
    }
    // else {
    //   this.$router.push({ path: '/login' })
    // }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('ISLOGIN', false)
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
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  padding: 5px 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
