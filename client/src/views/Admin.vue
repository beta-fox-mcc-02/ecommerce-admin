<template>
  <div>
    <b-container>
      <b-form
      @submit.prevent="login"
      >
        <h1>Login</h1>
        <b-form-group
          label="Email address:"
        >
          <b-form-input
            type="email"
            required
            v-model="dataLogin.emailLogin"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            required
            v-model="dataLogin.passwordLogin"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <br>
        <br>

        <b-button variant="link">Sign Up</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  data () {
    return {
      dataLogin: {
        emailLogin: '',
        passwordLogin: ''
      }
    }
  },
  methods: {
    login () {
      console.log('MASUK KATA DIAZZZZ=================')
      var payload = {
        email: this.dataLogin.emailLogin,
        password: this.dataLogin.passwordLogin
      }
      this.$store.dispatch('login', payload)
      console.log('sudah login')
    }
  }
}
</script>

<style>
</style>
