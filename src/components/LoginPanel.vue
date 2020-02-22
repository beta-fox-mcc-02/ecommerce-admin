<template>
  <div>
    <form
      class="container"
      @submit.prevent="login"
    >
      <h3>LOGIN</h3>
      <div class="form-group">
        <label for="emailLoginAdministrator">Email address</label>
        <input type="email" class="form-control" id="emailLoginAdministrator" aria-describedby="emailHelp" placeholder="Enter email" v-model="dataLogin.email">
      </div>
      <div class="form-group">
        <label for="passwordLoginAdministrator">Password</label>
        <input type="password" class="form-control" id="passwordLoginAdministrator" placeholder="Password"  v-model="dataLogin.password">
      </div>
      <div class="form-group form-check">      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button @click="register" type="button" class="btn btn-link">Sign Up</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginPanel',
  data () {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.dataLogin)
      this.$router.push('/')
    },
    register () {
      this.$router.push('/register')
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
