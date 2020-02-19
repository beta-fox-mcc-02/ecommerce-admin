<template>
  <div class="all-container">
    <div class="nav">
      <Nav />
    </div>

    <div class="content">
      <div class="col-6 home-image"></div>
      <div class="col-6 home-text">
        <h1>welcome</h1>
        <SignIn />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import SignIn from '../components/SingIn'

export default {
  name: 'Home',
  components: {
    Nav,
    SignIn
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>
