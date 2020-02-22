<template>
  <div class="card m-5 p-5 w-50 mx-auto">
    <h1 class="text-center mb-4">Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="name" v-focus required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" required>
      </div>
      <div class="form-group mb-5">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <input class="btn btn-primary" type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        RoleId: 1
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          // console.log(data)
          localStorage.access_token = data.access_token
          this.$store.commit('SET_ISLOGIN', true)
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
          this.$router.push('/products')
        })
        .catch(err => {
          // console.log(err.response)
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
