<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      or
      <router-link to="/login" id="login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div#nav {
  background-color: #189a18;
  padding: 1vh;
  text-align: right
}

a {
  color: white;
  margin: 0 1rem;
}

#login{
  margin-right: 0.1rem;
}

#register{
  margin-left: 0.1rem;
}

</style>
