<template>
  <div class="container auth">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <b-spinner label="Spinning" v-if="loading"></b-spinner>
          <h3>{{ action }}</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input type="email" class="form-control" placeholder="email" v-model="email" required />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                v-model="password"
                required
              />
            </div>
            <div class="form-group">
              <input type="submit" :value="action" class="btn float-right login_btn" />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">Don't have an account?</div>
          <div class="d-flex justify-content-center">
            <router-link
              @click.prevent="hideError"
              to="/register"
              class="nav-link buten"
              v-if="action=='Login'"
            >
              <i class="fa fa-user"></i>
              Register
            </router-link>
            <router-link
              @click.prevent="hideError"
              to="/login"
              class="nav-link buten"
              v-if="action=='Register'"
            >
              <i class="fa fa-sign-in"></i>
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  props: {
    action: String
  },
  methods: {
    submitForm() {
      this.loading = true
      let data = {
        email: this.email,
        password: this.password
      }
      if (this.action === 'Register') {
        data.role = 'admin'
        this.$store.dispatch('register', data)
          .then(({ data }) => {
            localStorage.setItem('token', data.access_token)
            this.$store.commit('afterAuth')
            this.$router.push('/dashboard')
            this.loading = false
          })
          .catch(err => {
            if (err.response.data.error) {
              this.$store.commit('showError', err.response.data.error)
            } else if (err.response.data.errors) {
              this.$store.commit('showError', err.response.data.errors[0])
            }
            this.loading = false
          })
      } else if (this.action === 'Login') {
        this.$store.dispatch('login', data)
          .then(({ data }) => {
            localStorage.setItem('token', data.access_token)
            this.$store.commit('afterAuth')
            this.$router.push('/dashboard')
            this.loading = false
          })
          .catch(err => {
            if (err.response.data.error) {
              this.$store.commit('showError', err.response.data.error)
            } else if (err.response.data.errors) {
              this.$store.commit('showError', err.response.data.errors[0])
            }
            this.loading = false
          })
      }
    },
    hideError() {
      this.$store.commit('showError', '')
    }
  }
}
</script>

<style>
.auth {
  margin-top: 60px;
}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.card-header h3 {
  color: white;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>
