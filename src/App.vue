<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    setCurrentPageHome () {
      this.$router.push({ name: 'Home' })
    },
    setCurrentPageDashboard () {
      this.$router.push({ name: 'Dashboard' })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.setCurrentPageDashboard()
      this.$store.commit('SETISLOGIN', true)
    } else {
      this.setCurrentPageHome()
      this.$store.commit('SETISLOGIN', false)
    }
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>
