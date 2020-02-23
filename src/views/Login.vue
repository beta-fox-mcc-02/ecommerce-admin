<template>
  <v-app v-if="!isAuthenticated" id="login-form">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert
              text
              dense
              color="teal"
              icon="mdi-check"
              border="left"
              v-if="isAuthenticated"
            >
              Login Success
            </v-alert>
            <v-alert
              text
              dense
              color="teal"
              icon="mdi-check"
              border="left"
              v-if="success.length"
            >
              {{ success.join('\n') }}
            </v-alert>
            <v-alert
              v-if="errors.length"
              text
              outlined
              color="deep-orange"
              icon="mdi-fire"
            >{{ errors.join('\n') }}</v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>LOGIN</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    label="email"
                    name="email"
                    required
                    prepend-icon="email"
                    v-model="email"
                    :error-messages="emailErrors"
                    type="email"
                    @blur="$v.email.$touch()"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    :error-messages="passwordErrors"
                    @blur="$v.password.$touch()"
                    required
                  />
              <v-card-actions class="justify-center align-center">
                <v-btn
                  v-if="!isLoadingProcess"
                  :disabled="$v.$invalid"
                  class="btn-login"
                  width="100"
                  type="submit"
                  color="primary"
                >Login</v-btn>
                <v-progress-circular
                  v-if="isLoadingProcess"
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-card-actions>
              <div class="dont-have-account">
                <v-subheader light>Don't have an account ?</v-subheader>
                <v-subheader light>
                  <router-link class="register-link" to="/register">Please register here</router-link>
                </v-subheader>
              </div>
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
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    login () {
      const authData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', authData)
        .then(response => {
          localStorage.token = response.body.token
          this.$store.commit('AUTHENTICATED_SUCCESS')
          this.$store.commit('AUTHENTICATED_LOADING', false)
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.commit('AUTHENTICATED_FAILED', err.body)
          this.$store.commit('AUTHENTICATED_LOADING', false)
        })
    }
  },
  computed: {
    errors () {
      return this.$store.getters.errors
    },
    success () {
      return this.$store.state.auth.success
    },
    isLoadingProcess () {
      return this.$store.getters.isLoading
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Email is required.')
      !this.$v.email.email && errors.push('Invalid email format')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.token) {
        vm.$store.dispatch('checkAuthentication')
          .then(response => {
            if (response.body.role.name === 'Admin') {
              next('/')
            } else {
              next()
            }
          })
          .catch((err) => {
            this.$store.commit('SET_ERRORS', err.body)
            next()
          })
      } else {
        next()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .justify-center {
    justify-content: center
  }
  .align-center {
    align-items: center
  }

  .dont-have-account {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .register-link {
      text-decoration: none;
      &:hover {
        font-weight: bolder;
      }
    }
  }
</style>
