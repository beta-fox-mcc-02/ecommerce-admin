<template>
  <div id="app">
    <router-view>
      <Footer slot="footer"/>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
export default {
  name: `App`,
  components : {
    Navbar,
    Footer
  }

}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  /* background-color:  */
}
</style>