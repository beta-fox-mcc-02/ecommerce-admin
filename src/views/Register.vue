<template>
  <v-app v-if="!isAuthenticated" id="register-form">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert
              v-if="errors.length"
              text
              outlined
              color="deep-orange"
              icon="mdi-fire"
            >{{ errors.join('\n') }}</v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                    label="firstname"
                    required
                    prepend-icon="person_add"
                    v-model="firstname"
                    :error-messages="firstnameErrors"
                    type="text"
                    @blur="$v.firstname.$touch()"
                  />
                   <v-text-field
                    label="lastname"
                    prepend-icon="person_add"
                    v-model="lastname"
                    type="text"
                  />
                  <v-text-field
                    label="username"
                    required
                    prepend-icon="person_outline"
                    v-model="username"
                    :error-messages="usernameErrors"
                    type="text"
                    @blur="$v.username.$touch()"
                  />
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
                      type="submit"
                      :disabled="$v.$invalid"
                      class="btn-login"
                      width="100"
                      color="primary"
                    >Register</v-btn>
                    <v-progress-circular
                      v-if="isLoadingProcess"
                      :size="50"
                      color="primary"
                      indeterminate
                    ></v-progress-circular>
                  </v-card-actions>
                  <div class="have-account">
                    <v-subheader light>Already have an account ?</v-subheader>
                    <v-subheader light>
                      <router-link class="login-link" to="/login">Please login here</router-link>
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
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  data: () => ({
    firstname: '',
    username: '',
    lastname: '',
    email: '',
    password: ''
  }),
  validations: {
    username: {
      required,
      minLength: minLength(6)
    },
    firstname: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    register () {
      const input = {
        first_name: this.firstname,
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', input)
        .then(response => {
          this.$store.commit('SET_AUTH_SUCCESS', 'Register success')
          this.$store.commit('AUTHENTICATED_LOADING', false)
          this.$router.push('/login')
        })
        .catch(err => {
          this.$store.commit('SET_AUTH_ERRORS', err.body.errors)
          this.$store.commit('AUTHENTICATED_LOADING', false)
        })
    }
  },
  computed: {
    errors () {
      return this.$store.getters.errors
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
      !this.$v.password.minLength && errors.push('Password minimal 8 characters')
      return errors
    },
    firstnameErrors () {
      const errors = []
      if (!this.$v.firstname.$dirty) return errors
      !this.$v.firstname.required && errors.push('Firstname is required.')
      return errors
    },
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required.')
      !this.$v.username.minLength && errors.push('Username minimal 6 characters')
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
            console.log(err)
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

  .have-account {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .login-link {
      text-decoration: none;
      &:hover {
        font-weight: bolder;
      }
    }
  }
</style>
