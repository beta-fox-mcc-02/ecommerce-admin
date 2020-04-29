<template>
  <div id="login">
    <div class="card" style="width: 30%;">
      <form class="p-3" @submit.prevent="register">
        <h4>Register Here</h4>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            v-model="username"
            required>
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
            required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="password"
            required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
      OR
      <div class="p-2 mb-3">
        <router-link to="/login">Login Here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          this.username = ''
          this.email = ''
          this.password = ''
          this.$vToastify.success({
            title: 'Register Success !',
            body: 'Please Login'
          })
          this.$router.push('/login')
        })
        .catch(_ => {
          this.$vToastify.error({
            title: 'Register Failed !',
            body: 'Email Not Unique, Please choose another email'
          })
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style scoped>

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #181818e5;
}

</style>
