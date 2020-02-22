<template>
  <div>
    <div class="container">
      <div id="form-register">
        <form @submit.prevent="register">
          <label>NAME</label><br>
          <input type="text" required v-model="first_name"><br><br>
          <label>ADDRESS</label><br>
          <input type="text" required v-model="address"><br><br>
          <label>EMAIL</label><br>
          <input type="email" required v-model="email"><br><br>
          <label>PASSWORD</label><br>
          <input type="password" required v-model="password"><br><br>
          <button type="submit" class="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      first_name: '',
      address: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        first_name: this.first_name,
        address: this.address,
        email: this.email,
        password: this.password,
        role: true
      }
      this.$store.dispatch('register', payload)
        .then(({ user }) => {
          this.$router.push({ path: '/login' })
          this.$vToastify.success('REGISTER NEW ADMIN SUCCESSS', 'BRO')
        })
        .catch(err => {
          this.$vToastify.warning({
            title: 'BRO',
            body: `${err.response.data.msg}`,
            type: 'warning',
            duration: 3000
          })
        })
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
