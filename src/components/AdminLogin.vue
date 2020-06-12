<template>
  <div>
    <div class="container alert alert-warning" role="alert" v-if="error">{{error}}</div>
    <center>
    <div class="login-container">
      <b-form method="post" v-on:submit.prevent="loginAdmin">
        <h3>Login form</h3> 
        <b-form-input
          type="email"
          name="email"
          v-model="email"
          placeholder="email address..."
          required
        />
        <br />
        <b-form-input
          type="password"
          name="password"
          v-model="password"
          placeholder="password..."
          required
        /><br />
        <b-button variant="primary" type="submit">
          Login
        </b-button> <br>
        <b-button variant="success" type="button">
          <router-link to="/" class="nav-menu">Back to home</router-link>
        </b-button>
      </b-form>
    </div>
    <b-spinner label="Spinning" v-if="loading"></b-spinner>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    loginAdmin() {
      this.loading = true;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password

        })
        .then(data => {
          // console.log(data.data);
          this.loading = false;
          this.$store.commit("resetLog");
          this.$store.commit("setLogin", data.data.email)
          localStorage.setItem("access_token", data.data.token);
          this.$router.push("/product/list");
        })
        .catch(err => {
          if (err.response.data.msg) {
            this.error = err.response.data.msg
          } else if (err.response.data.msg) {
            this.error = err.response.data.msg[0]
          }
          this.loading = false;
        });
    }
  },
  computed: {
  }
};
</script>

<style scoped>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: steelblue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #033c92;
}

div {
  border-radius: 5px;
  background-color: white;
  padding: 20px;
}

.nav-menu {
  color: white;
}

.login-container {
  background-color: gainsboro;
  width: 80%;
}
</style>
