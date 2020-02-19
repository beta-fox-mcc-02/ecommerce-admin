<template>
  <div class="container auth">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>{{ action }}</h3>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
          </div>
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
              <input type="submit" value="Login" class="btn float-right login_btn" />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">Don't have an account?</div>
          <div class="d-flex justify-content-center">
            <router-link to="/register" class="nav-link buten">
              <i class="fa fa-sign-in"></i>
              Register
            </router-link>
            <!-- <a href="#">Sign Up</a> -->
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
      password: ''
    }
  },
  props: {
    action: String
  },
  methods: {
    submitForm() {
      let data = {
        email: this.email,
        password: this.password
      }
      if (this.action === 'Register') {
        data.role = 'admin'
        this.$store.dispatch('register', data)
          .then(({ data }) => {
            this.$store.commit('afterAuth', data.access_token)
          })
          .catch(err => {
            console.log(err.response.data)
          })
      } else if (this.action === 'Login') {
        this.$store.dispatch('login', data)
          .then(({ data }) => {
            this.$store.commit('afterAuth', data.access_token)
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err.response.data)
          })
      }

      console.log(data)
    }
  }
}
</script>

<style>
.auth {
  margin-top: 100px;
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

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
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
