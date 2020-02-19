<template>
  <v-app id="inspire">
    <Sidebar/>
    <Navbar/>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        <h1>Dashboard</h1>
        </v-row>
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
  }),
  created () {
    this.$store.dispatch('getProfile')
  }
}
</script>
