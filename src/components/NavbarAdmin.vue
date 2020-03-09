<template>
  <div >
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>Home</b-nav-item>
            <b-nav-item @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand" href="#">ADMIN APP</a>
      <div v-if="token" >
        <button @click="logout"  type="button " class="btn btn-secondary" >logout</button>
      </div>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: 'NavbarAdmin',
  data () {
    return {
      token: localStorage.access_token
    }
  },
  methods: {
    logout () {
      console.log('KELUAR YAAAA')
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
