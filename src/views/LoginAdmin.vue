<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="loginAdmin">
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                    <v-card-actions>
                        <v-spacer />
                        <v-btn type="submit" color="primary">Login</v-btn>
                    </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginAdmin () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          if (data.data.role === 'admin') {
            localStorage.admin_token = data.data.access_token
            this.$store.commit('setAdminName', data.data.name)
            this.$store.commit('setAdminEmail', data.data.email)
            this.$router.push('/admin')
          }
        })
        .catch(err => {
          this.$router.commit('setMessage', err)
        })
    }
  },
  created () {
    document.title = 'Login FootStyle'
  }
}
</script>
