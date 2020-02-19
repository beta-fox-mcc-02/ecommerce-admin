<template>
  <div>
    <div class="container">
        <div id="form-login">
          <h1>LOG IN</h1>
          <form v-on:submit.prevent="login">
            <label>EMAIL</label><br>
            <input type="email" required v-model="email"><br><br>
            <label>PASSWORD</label><br>
            <input type="password" required v-model="password"><br><br>
            <button type="submit" class="btn btn-primary">SUBMIT</button>
          </form>
          <br>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
