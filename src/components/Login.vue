<template>
  <div class="card m-5 p-5 w-50 mx-auto">
    <h1 class="text-center">Login</h1>
    <form @submit.prevent='login'>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" v-focus required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <input class="btn btn-primary mb-3" type="submit">
    </form>
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
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$store.commit('SET_ISLOGIN', true)
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
          // console.log(data)
          this.$router.push('/products')
        })
        .catch(err => {
          // console.log(err.response)
          // console.log(err.response.data.msg)
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
