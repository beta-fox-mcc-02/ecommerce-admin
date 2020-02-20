<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"/>
    <Navbar @toggleDrawer="toggleDrawer"/>
    <v-content>
      <v-container
        fluid
      >
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  },
  data: () => ({
    drawer: true
  }),
  created () {
    this.$store.dispatch('getProfile')
    this.drawer = true
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.token) {
        vm.$store.dispatch('checkAuthentication')
          .then(response => {
            if (response.body.role.name === 'Admin') {
              next()
            } else {
              next('/login')
            }
          })
          .catch((err) => {
            console.log(err)
            next('/login')
          })
      } else {
        next('/login')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
 .v-content {
   padding: 0 !important;
 }
 .wrapper {
   width: 100%;
 }
</style>
