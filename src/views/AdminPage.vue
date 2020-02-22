<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{adminName}}</v-list-item-title>
            <v-list-item-subtitle>{{adminEmail}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="deep-purple"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Foot-Style Admin</v-toolbar-title>

      <v-spacer />
      <v-btn
        icon
        large
        @click="toAdminHome"
      >
        <v-icon>person</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn @click="adminLogout" icon>
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>

    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Admin Page',
  data () {
    return {
      drawer: null
    }
  },
  computed: {
    items () {
      return this.$store.state.adminMenu
    },
    adminName () {
      return this.$store.state.adminName
    },
    adminEmail () {
      return this.$store.state.adminEmail
    }
  },
  methods: {
    toAdminHome () {
      this.$router.push('/admin')
    },
    adminLogout () {
      localStorage.clear()
      this.$store.commit('setAdminName', null)
      this.$store.commit('setAdminEmail', null)
      this.$router.push('/')
    }
  },
  created () {
    document.title = 'Foot-Style Admin'
    this.$store.dispatch('getAllCategories')
  }
}
</script>
