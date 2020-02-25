<template>
  <v-app>
    <notifications group="sign" position="center center" :width="600"/>
    <n-navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import nNavbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    nNavbar
  },
  methods: {
    checkLogin () {
      if (localStorage.token) {
        this.$store.commit('setIsLogin', true)
      } else {
        this.$store.commit('setIsLogin', false)
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
  .hvr:active {
    background-color: blue;
  }
</style>
