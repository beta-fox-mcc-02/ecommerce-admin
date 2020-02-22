<template>
  <div class="login">
    <h3>{{ msg }}</h3>
    <div class="row" id="login">
        <div class="col s4 offset-s4">
          <div class="card z-depth-3">
            <div class="card-content">
              <span class="card-title center">Login</span>
              <form id="login-form" @submit.prevent="login">
                <div class="row">
                  <div class="input-field col s12">
                    <input class="validate" id="username" type="text" required v-model="user">
                    <label for="username">Username</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input class="validate" id="passwordRegis" type="password" required v-model="password">
                    <label for="password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 center">
                    <button class="btn-large blue accent-4 waves-effect" type="submit" name="action">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        user: this.user,
        password: this.password
      }
      console.log(payload)
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          this.user = ''
          this.password = ''
          localStorage.setItem('token', data.token)
          this.$store.commit('SET_CURRENT_USER', { currentUser: data.username })
          this.$router.push({ path: '/admin' })
        })
        .catch(err => {
          this.$store.commit('ERR_HANDLER', { errors: `${err}` })
        })
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#login {
  margin: 2rem 0 0rem 0
}
</style>
