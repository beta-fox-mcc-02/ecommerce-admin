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
export default {
  computed: {
    email: {
      get () { return this.$store.state.email },
      set (value) { this.$store.commit('setEmail', value) }
    },
    password: {
      get () { return this.$store.state.password },
      set (value) { this.$store.commit('setPassword', value) }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginAsync')
        .then((data) => {
          localStorage.setItem('access_token', data.data.token)
          this.$store.commit('isAdmin', true)
          this.$router.push('/')
        })
        .catch(() => {
          this.$store.commit('unsetEmailPassword')
        })
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
