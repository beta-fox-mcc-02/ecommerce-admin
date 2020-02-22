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
        .then(({ data }) => {
          console.log('SUKES MASOOOOOOK')
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('LOGIN', true)
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.dispatch('error', err.msg)
        })
      // console.log('sudah login')
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
