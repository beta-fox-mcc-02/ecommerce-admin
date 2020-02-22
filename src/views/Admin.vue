<template>
  <div>
    <router-link to="/admin/login"></router-link>
    <router-link to="/admin/register"></router-link>
    <router-link to="/admin/dashboard"></router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  data () {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('MASUK KATA DIAZZZZ=================')
      const payload = {
        email: this.dataLogin.email,
        password: this.dataLogin.password
      }
      this.$store.dispatch('login', payload)
      console.log('sudah login')
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
