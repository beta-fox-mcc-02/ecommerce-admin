<template>
<div class="container">
    <br>
    <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
            <div class="card card-signup z-depth-0 text-center">
                <div class="card-header">
                    <img alt="Vuelogo" src="../assets/logo.png" style="width: 100px">
                </div>
                <div class="card-body">
                    <label>LOGIN</label>
                    <from @submit.prevent='loginAdmin'>
                        <div class="form-group">
                            <label>Email address</label>
                            <input v-model="loginEmail" type="email" class="form-control" name="loginEmail" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input v-model="loginPass" type="password" name="loginPass" class="form-control" placeholder="Password">
                            <small class="form-text text-muted">Password must more than 5 characters.</small>
                        </div>
                        <button type="submit" class="btn btn-success">Login</button>
                    </from>
                    <br>
                    <Register></Register>
                </div>
            </div>
        </div>
        <div class="col-sm"></div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Register from '@/components/RegisterAdmin'
export default {
  name: 'AdminLogin',
  data () {
    return {
      loginEmail: '',
      loginPass: ''
    }
  },
  methods: {
    loginAdmin () {
      console.log('masuuuuuuuk')
      const loginEmail = this.loginEmail
      const loginPass = this.loginPass
      console.log(loginEmail, loginPass)
      axios.post('http://localhost:3000/admin/login', {
        email: loginEmail,
        password: loginPass
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.token = data.token
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    Register
  }
}
</script>

<style>

</style>
