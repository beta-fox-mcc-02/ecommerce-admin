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
            <v-list-item-title class="title">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
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
          v-model="group"
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2 deep-purple">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      color="deep-purple"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>e-Commerce Config</v-toolbar-title>

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
    }
  }
}
</script>
