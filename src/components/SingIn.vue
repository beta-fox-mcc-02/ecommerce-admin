<template>
    <div class="col-6 m-3 py-5 px-auto signIn-area">
        <form @submit.prevent="signIn">
            <div class="form-group">
              <label for="email">Email:</label>
              <input v-model="email" type="email" class="form-control" id="email" placeholder="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="password" required>
            </div>
            <button type="submit" class="btn btn-secondary">Sign In</button>
        </form>
        <router-link to="/signUp">
            <p class="to-signIn my-3">Sign up for this site</p>
        </router-link>
    </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      axios({
        method: 'POST',
        url: '/admins/signIn',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.$router.push({ name: 'Dashboard' })
          this.$store.commit('SETISLOGIN', true)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style scoped>
.signIn-area {
    background-color: rgb(47, 47, 47);
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
}

.signIn-area form {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
