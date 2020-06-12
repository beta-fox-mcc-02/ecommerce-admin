<template>
  <div class="hello">
    <br>
    <h1>{{ msg }}</h1>
    <h2>Please login first to access the dashboard</h2>
    <b-button variant="success"><router-link to="/login" class="nav-menu">Login</router-link></b-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

