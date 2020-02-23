<template>
  <v-app-bar
  app
  color="primary"
  dark
>
    <div @click="toHome" class="d-flex align-center pointer">
      <v-img
        alt="Nav-Shop Logo"
        class="shrink mr-2"
        contain
        src="../assets/nav-shop.png"
        transition="scale-transition"
        width="40"
      />

      <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
      Singkongpedia
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn @click="logout" v-if="isLogin" text color="white">Logout</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NafNavbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('changeSignForm', true)
      this.$store.commit('setIsLogin', false)
    },
    toHome () {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer
      })
      setTimeout(() => {
        loader.hide()
        this.$router.push('/')
      }, 1000)
    }
  }
}
</script>

<style>

</style>
