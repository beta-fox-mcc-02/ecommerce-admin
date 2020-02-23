<template>
  <div class="login">
    <h1>Login Form</h1> <br>
    <form @submit.prevent="adminLogin">
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
        value="LOGIN"
      ><br>
      <Register></Register>
      
      <!-- <center><label>No account?</label>
      <a href="#"
        @click="register"
      >Register Here</a></center>
      register -->
    </form>
  </div>
</template>

<script>
import Register from '@/components/Register.vue'

export default {
  name: 'adminLoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const Admin = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('adminLogin', Admin)
    }
  },
  components: {
    Register
  }
}
</script>

<style>
</style>
