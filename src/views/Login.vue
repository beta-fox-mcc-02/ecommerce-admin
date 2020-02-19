<template>
  <div id="form-login">
    <form v-on:submit.prevent="login">
      <h1>WELCOME!!</h1>
      <div class="inputs">
        <input type="email" v-model="email" required><br>
        <small>email</small>
      </div>
      <div class="inputs">
        <input type="password" v-model="password" required><br>
        <small>password</small>
      </div>
      <div class="button">
        <button type="submit" id="login-btn">Login</button>
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
          this.$store.commit('unsetEmailPassword')
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
  animation: fade-out 3s;
}

.inputs {
  width: 50%;
  padding: 1rem;
}

input {
  outline: 0;
  height: 2rem;
  width: 100%;
  border-style: none;
  border-bottom: 0.1rem solid #dadada;
  font-size: 17pt;
  color: #777777;
  font-style: italic;
  font-family: none;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto
}

button#login-btn {
  padding: 0.5rem 3rem;
  cursor: pointer;
  font-family: none;
  font-size: 15pt;
  -webkit-text-stroke-width: thin;
  box-shadow: 0rem 0rem 0.2rem #a0a0a0;
}

@keyframes fade-out {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>
