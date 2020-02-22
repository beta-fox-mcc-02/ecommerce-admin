<template>
    <div class="container">
        <form
        @submit.prevent="register"
        >
            <div class="form-group">
                <h1>Register</h1>
                <label for="email">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="dataRegistration.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="passwordRegisterAdmin" v-model="dataRegistration.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
  name: 'RegisterPanel',
  data () {
    return {
      dataRegistration: {
        email: '',
        password: ''
      }
    }
  },
  components: {
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.dataRegistration)
      this.$router.push('/login')
    }
  }
}

</script>

<style>

</style>
