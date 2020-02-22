<template>
  <b-navbar class="navbar is-white">
    <template slot="brand">
      <b-navbar-item>
        <img src="../../assets/logo.png" alt="GramediYou" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <button class="button is-link" @click="login" v-if="page === 'register'">
            <strong>Login</strong>
          </button>
          <button class="button is-warning" @click="register" v-else-if="page === 'login'">
            <strong>Register</strong>
          </button>
          <button class="button is-danger" @click="logout" v-else>
            <strong>Log Out</strong>
          </button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar_Admin',
  data () {
    return {
      page: this.$store.state.page
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('CHANGE_PAGE', 'login')
      this.$router.push({ path: '/admin/login' })
    },
    login () {
      this.$store.commit('CHANGE_PAGE', 'login')
      this.$router.push({ path: '/admin/login' })
    },
    register () {
      this.$store.commit('CHANGE_PAGE', 'register')
      this.$router.push({ path: '/admin/register' })
    }
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.page = 'login'
    }
  }
}
</script>

<style>
</style>
