<template>
  <div class="container mx-auto" style="width: 20rem; margin-top: 5rem">
    <h3>Login as Admin</h3>
    
    <img src="../assets/loading.gif" alt="" style="max-width: 20rem;" v-if="seeLoading">
    <form @submit.prevent="login" v-else>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    <p>
      <router-link to="registerPage">Register here</router-link>
    </p>
    <div class="alert alert-danger" role="alert" v-if="err !== ''">{{err}}</div>
  </div>
</template>
<script>
name: "loginPage";
import axios from "../api/axiosInstance";
export default {
  data() {
    return {
      email: "",
      password: "",
      err: ""
    };
  },
  computed:{
    seeLoading() { 
      return this.$store.state.loading;
    }
  },
  methods: {
    login() {
      this.$store.commit('SET_LOADING', true)
      axios({
        method: "post",
        url: "/user/login",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            // this.$store.commit('setonUpdate', true)
            // console.log(data);
            this.email = "";
            this.password = "";
            this.$router.push("/admin");
            // this.$store.commit.login
            this.$store.commit('SET_LOADING', false)

            this.$store.commit("SET_LOGIN", true);
          }
        })
        .catch(err => {
          this.err = "password/email wrong";
          console.log(err);
          this.$store.commit('SET_LOADING', false)

        });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("token")) {
      next("/");
    } else {
      next();
    }
  }
};
</script>

<style>
</style>