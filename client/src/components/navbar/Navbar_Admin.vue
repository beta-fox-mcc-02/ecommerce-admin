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
            <router-link to="/admin/login" style="color: white;"><strong>Login</strong></router-link>
          </button>
          <button class="button is-warning" @click="register" v-else-if="page === 'login'">
            <router-link to="/admin/register" style="color: black;"><strong>Register</strong></router-link>
          </button>
          <button class="button is-danger" @click="logout" v-else>
            <router-link to="/admin/login" style="color: white;"><strong>Log Out</strong></router-link>
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
      page: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('CHANGE_PAGE', 'login')
      this.page = this.$store.state.page
      // this.$router.push({ path: '/admin/login' })
    },
    login () {
      this.$store.commit('CHANGE_PAGE', 'login')
      this.page = this.$store.state.page
      // this.$router.push({ path: '/admin/login' })
    },
    register () {
      this.$store.commit('CHANGE_PAGE', 'register')
      this.page = this.$store.state.page
      // this.$router.push({ path: '/admin/register' })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('CHANGE_PAGE', 'home')
    } else {
      this.$store.commit('CHANGE_PAGE', 'login')
    }
    this.page = this.$store.state.page
  }
}
</script>

<style>
</style>
