<template>
  <div class="register">
    <form method="post" @submit.prevent="register">
        <strong>Register</strong>
        <b-field label="Username">
            <b-input type="text" v-model="username"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email" v-model="email"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>
        <button class="button is-success">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('fetchRegister', payload)
        .then(({ data }) => {
          this.$store.commit('CHANGE_PAGE', 'login')
          this.$buefy.toast.open({
            duration: 5000,
            message: data.message,
            position: 'is-top',
            type: 'is-success'
          })
          this.$router.push({ path: '/admin/login' })
        })
        .catch(err => {
          this.$buefy.toast.open({
            duration: 5000,
            message: err.response.data.message,
            position: 'is-top',
            type: 'is-danger'
          })
        })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('CHANGE_PAGE', 'home')
      this.$router.push({ path: '/admin' })
    }
  }
}
</script>

<style>

</style>
