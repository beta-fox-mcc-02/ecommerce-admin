<template>
  <div class="login">
    <form method="post" @submit.prevent="login">
        <strong>LOGIN</strong>
        <b-field label="Email">
            <b-input type="email" v-model="email"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>
        <button class="button is-success">Login</button>
    </form>
  </div>
</template>

<script>
export default {
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
      this.$store.dispatch('fetchLogin', payload)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.$store.dispatch('fetchProduct')
          this.$store.commit('CHANGE_PAGE', 'home')
          this.$buefy.toast.open({
            duration: 5000,
            message: data.message,
            position: 'is-top',
            type: 'is-success'
          })
          this.$router.push({ path: '/admin' })
        })
        .catch(err => {
          this.$buefy.toast.open({
            duration: 10000,
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
