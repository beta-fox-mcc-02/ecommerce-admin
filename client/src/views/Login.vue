<template>
  <div>
    <div class="container">
        <div id="form-login">
          <h3>ADMIN LOG IN</h3>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('setLogin', payload)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.$router.push({ path: '/admin' })
          this.$vToastify.success('LOGIN SUCCESSS', 'BRO')
          this.$store.commit('ISADMIN', data)
          this.$store.commit('ISLOGIN', true)
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
