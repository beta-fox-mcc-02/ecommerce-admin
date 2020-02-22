<template>
  <header>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Login
      </v-btn>

      <v-btn>
        Register
      </v-btn>

      <v-btn
        @click="loginAdmin"
      >
        Admin
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  methods: {
    loginAdmin () {
      this.$router.push('/log')
    }
  }
}
</script>

<style>

</style>
