<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand" href="#">ADMIN APP</a>
      <!-- HIDING BOOTSTRAPPPP -->
      <div v-if="token" >
        <button @click="logout"  type="button " class="btn btn-secondary" >logout</button>
      </div>
    </nav>
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
