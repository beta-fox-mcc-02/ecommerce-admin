<template>
  <div>
    <div class="container alert alert-warning" role="alert" v-if="error">{{error}}</div>
    <center>
    <div class="register-container">
      <b-form method="post" v-on:submit.prevent="registerAdmin">
        <h3>Register new admin</h3>
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
        />
        <b-form-invalid-feedback :state="validation">
          Your password must be at least 3 characters
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Looks Good.
        </b-form-valid-feedback>
        <b-button variant="success" type="submit" class="button-custom">
          Register new admin
        </b-button> <br>
        <b-button variant="primary" type="button" class="button-custom">
          <router-link to="/product/list" class=white>Back to product list</router-link>
        </b-button> <br>
        <b-spinner label="Spinning" v-if="loading"></b-spinner>
      </b-form>
    </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    registerAdmin() {
      this.loading = true;
      axios({
        method: "post",
        url: "https://tranquil-coast-06554.herokuapp.com/admin/register",
        // url: "http://localhost:3000/register",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(data => {
          this.loading = false;
          this.$router.push("Product");
        })
        .catch(err => {
          console.log(err.response)
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
    validation() {
      return this.password.length >= 3
    }
  },
  created() {
    if (localStorage.access_token) {
      this.$router.push('/register');
    } else {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
  .main-container {
    display: flex;
    justify-content: center;
  }
  .register-container {
    margin: 8px;
    padding: 12px;
    background-color: gainsboro;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    width: 80%;
  }

  .button-custom {
    margin: 8px;
  }
</style>
