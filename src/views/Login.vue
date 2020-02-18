<template>
  <div id="form-login">
    <form v-on:submit.prevent="login">
      <div class="inputs">
        <input type="email" v-model="email" required><br>
        <small>email</small>
      </div>
      <div class="inputs">
        <input type="password" v-model="password" required><br>
        <small>password</small>
      </div>
      <div class="button">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.email && this.password) {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/admin/login',
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then((result) => {
            localStorage.setItem('access_token', result.data.token)
            this.$router.push('/')
          })
          .catch((err) => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

div#form-login {
  width: 30rem;
  margin: auto;
  margin-top: 5rem;
}

.inputs {
  margin: 0.5rem 0;
}

input {
  outline: 0;
  border-style: none;
  border-bottom: 0.1rem solid green;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto
}

</style>
