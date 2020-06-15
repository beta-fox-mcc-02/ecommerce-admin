<template>
<div class="all-container">
    <div class="nav">
        <Nav />
    </div>

    <div class="mt-3 d-flex justify-content-center content">
        <div class="signUp-area">
            <h2 align="center">Sign Up</h2>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            <form @submit.prevent="signUp">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="password" required>
                </div>
                <div class="d-flex align-items-center">
                    <button type="submit" class="btn btn-secondary">Sign Up</button>
                    <router-link to="/">
                        <p class="to-signIn my-0 mx-3">Already have an account?</p>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from '../config/axios'
import Nav from '../components/Nav'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  components: {
    Nav
  },
  methods: {
    signUp () {
      axios({
        method: 'POST',
        url: '/admins/signUp',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.$router.push({ name: 'Home' })
          this.$store.commit('SET_SUCCESS_SIGNUP_MESSAGE', data.msg)
        })
        .catch(err => {
          this.errorMessage = err.response.data.msg
        })
    }
  },
  computed: {
    isError () {
      return this.$store.state.isError
    }
  }
}
</script>

<style scoped>
.signUp-area {
    width: 25%;
    display: flex;
    flex-direction: column;
}

.signUp-area form{
    font-size: 1.5rem;
}

.to-signIn {
    font-size: 1rem;
}

.error-message {
  color: red;
  margin-bottom: 10px
}
</style>
