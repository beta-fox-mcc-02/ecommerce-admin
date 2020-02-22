<template>
  <div>
    <b-form method="post" v-on:submit.prevent="loginAdmin">
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
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginAdmin() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password

        })
        .then(data => {
          // console.log(data.data);
          this.$store.commit("resetLog");
          this.$store.commit("setLogin", data.data.email)
          localStorage.setItem("access_token", data.data.token);
          this.$router.push("/product/list");
        })
        .catch(err => {
          console.log(err.response);
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
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
