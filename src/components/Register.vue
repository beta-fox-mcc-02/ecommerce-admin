<template>
   <div class="login">
    <h1>Login Form</h1> <br>
    <form @submit.prevent="adminRegis">
      <label>Email</label>
      <input
        v-model="email"
        type="text"
        required
        class="form_login"
        placeholder="Input your email..."
      ><br>

      <label>Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        required
        class="form_login"
        placeholder="Input your password..."
      ><br>

      <input
        type="submit"
        id="login-button"
        class="btn_login"
        value="Register"
      ><br>
      
      <!-- <center><label>No account?</label>
      <a href="#"
        @click="register"
      >Register Here</a></center>
      register -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminRegister',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    adminRegis () {
      const Admin = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('adminRegis', Admin)
    }
  }
}
</script>

<style>

</style>