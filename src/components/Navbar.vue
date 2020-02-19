<template>
  <div id="navbar">
    <div class="left-bar">
      <h2>TITLE</h2>
      <ul>
        <li>Home</li>
        <li>Product</li>
      </ul>
    </div>
    <div class="right-bar">
      <div class="login">
        <ul>
          <li><router-link to="/register" class="linker">Register</router-link></li>
          <li><router-link to="/login" class="linker">Login</router-link></li>
          <li><a @click="showFormLoginAdmin">My-Admin</a></li>
        </ul>
      </div>
      <div class="chart">
        <ul>
          <li>Chart</li>
        </ul>
      </div>
      <div class="logout">
        <ul>
          <li>Logout</li>
        </ul>
      </div>
    </div>

    <b-modal id="login-admin" hide-footer>
      <div class="d-block text-center">
          <center>
              <form style="" v-on:submit.prevent="loginAdmin">
                  <h2 id="title-login-admin">Login As Admin</h2>
                  <br>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" id="email" class="form-control" v-model="admin.email">
                  </div>
                  <div class="form-group">
                      <label for="description">Password</label>
                      <input type="password" id="password" class="form-control" v-model="admin.password">
                  </div>
                  <b-button id="submit-login-admin" class="mt-3 btn btn-primary" block type="submit" style="background-color:blue">Submit</b-button>
              </form>
          </center>
      </div>
      <!-- <b-button id="cancel-login-admin" class="mt-3" block @click="$bvModal.hide(`add-task`)" style="background-color:red">Cancel</b-button> -->
      <br>
      <p>register as admin</p>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'LandingPage',
  data () {
    return {
      admin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    changeNav (nav) {
      this.$store.dispatch('changeNav', nav)
    },
    showFormLoginAdmin () {
      this.$bvModal.show('login-admin')
    },
    loginAdmin () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admins/login',
        data: {
          email: this.admin.email,
          password: this.admin.password
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('login-admin')
          localStorage.token = data.access_token
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>
* {
  margin : 0;
}

#navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: black;
  height: 8vh;
  /* position: fixed; */
}

/* LEFT NAVBAR */

#navbar .left-bar{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}

#navbar .left-bar ul{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
}

#navbar .left-bar ul li{
  padding-left: 20px;
}

/* RIGHT NAVBAR  */

#navbar .right-bar{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#navbar .right-bar .chart ul, #navbar .right-bar .login ul, #navbar .right-bar .logout ul{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-right: 20px;
}

#navbar .right-bar .login ul li {
  padding-right: 20px;
}

li, h2 {
  color: white;
}

#navbar .right-bar .chart ul li, #navbar .right-bar .login ul li, #navbar .right-bar .logout ul li, #navbar .left-bar ul li {
  cursor: pointer;
  margin-top: 10px;
  color: white;
}

.linker {
  color: white;
}

#title-login-admin {
  color: black;
}

#cancel-login-admin {
  width: 50%;
  margin: 0 auto;
}

#submit-login-admin {
  width: 90%;
}

#login-admin {
  background-color: rgb(29, 43, 38);
}
</style>
