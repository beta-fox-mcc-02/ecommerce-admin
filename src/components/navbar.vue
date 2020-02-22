<template>
    <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Admin</v-toolbar-title>

      <v-spacer></v-spacer>
    <div class="logout" v-if="this.token" @click.prevent="logout">
        <v-btn icon>
        logout
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
    <div class="logout" v-if="!this.token" style="padding-right: 30px"  @click.prevent="register">
        <v-btn icon>
            register
            <v-icon>mdi-login</v-icon>
      </v-btn>
    </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }

}
</script>

<style>

</style>
