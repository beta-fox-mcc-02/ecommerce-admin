<template>
  <div class="main-container">
    <div class="register-container">
      <b-form method="post" v-on:submit.prevent="registerAdmin">
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
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    registerAdmin() {
      axios({
        method: "post",
        url: "http://localhost:3000/admin/register",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(data => {
          console.log(data);
          this.$router.push("Product");
        })
        .catch(err => {
          console.log(err);
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
