<template>
  <div id="form-login">
    <div id="login-container">
      <form v-on:submit.prevent="login">
        <h1 id="login-header">Master Login</h1>
        <div class="inputs">
          <input type="email" v-model="email" required>
          <small>email required!</small>
        </div>
        <div class="inputs">
          <input type="password" v-model="password" required>
          <small>password required!</small>
        </div>
        <div class="button">
          <button type="submit" id="login-btn">Login</button>
        </div>
      </form>
    </div>
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
    width: 100vw;
    height: 100vh;
    animation: fade-out-data-v-26084dc2 3s;
}

#login-header {
    margin-bottom: 1rem;
    font-variant: small-caps;
    border-bottom: 0.1rem solid #d8d8d8;
}

div#login-container {
    height: inherit;
    display: flex;
    background-color: #e6e6e6;
}

form {
    width: 30vw;
    min-width: 20rem;
    height: 75vh;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem silver;
}

.inputs {
    padding: 0.2rem;
    width: 60%;
    margin: 0.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.5rem #c3c3c3;
}

input {
    outline: 0;
    height: 50%;
    width: 85%;
    margin: 0.2rem auto;
    border-style: none;
    font-size: 15pt;
    font-style: italic;
    font-family: none;
    color: #14b314;
}

small {
    margin-left: 1rem;
    font-style: italic;
    color: #e6e6e6;
}

button#login-btn {
    padding: 0.5rem 3rem;
    cursor: pointer;
    margin-top: 1rem;
    font-family: none;
    font-size: 15pt;
    color: white;
    border-radius: 2rem;
    background-color: #007300;
    border-style: none;
    font-variant-caps: all-small-caps;
    box-shadow: 0 0 0.5rem #989898;
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
