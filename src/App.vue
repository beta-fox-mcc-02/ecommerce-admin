<template>
  <div id="app">
    <Nav id="nav"></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Navbar'
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #cdcdce;
}

#nav a.router-link-exact-active {
  color: #50b98a;
}
</style>
