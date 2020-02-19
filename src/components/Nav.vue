<template>
    <div class="col-12 d-flex align-items-center">
        <div class="col-6 p-0">
            <router-link to="/">
                Logo
            </router-link>
        </div>
        <div class="col-6 p-0" v-if="getIsLogin">
            <p @click="signOut">logout</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    signOut () {
      localStorage.removeItem('token')
      this.$router.push({ name: 'Home' })
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
