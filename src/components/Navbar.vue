<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">Admin CMS</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down"
    />
    <v-spacer />
    <v-subheader>{{ profile ? profile.username: '' }}</v-subheader>
    <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
          icon
          large
          v-on="on"
          >
          <v-avatar
            size="32px"
            item
          >
            <v-img
              src="../assets/images/profile.svg"
              alt="Vuetify"
            /></v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn @click="logout" class="ma-2" color="red" dark>Logout
                <v-icon dark right>mdi-cancel</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
  }),
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$store.commit('SET_AUTH_SUCCESS', 'Logout success')
      this.$router.push('/login')
    }
  },
  computed: {
    profile () {
      return this.$store.state.dashboard.profile
    },
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-menu__content {
    top: 55px !important;
  }
</style>
