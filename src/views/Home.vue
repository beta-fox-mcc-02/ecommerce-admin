<template>
  <div class="all-container">
    <div class="nav">
      <Nav />
    </div>

    <div class="content">
      <div class="col-6 home-image">
        <img class="home-image" src="../assets/undraw_data_trends_b0wg.svg" alt="welcome-img">
      </div>
      <div class="col-5 home-text">
        <h1>Welcome Admin!</h1>
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

<style scoped>
.home-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.home-text h1{
  font-weight: bold;
}

.home-text a{
    width: max-content;
    height: max-content;
}

.content {
    display: flex;
    justify-content: center;
    height: 90%;
}

.home-image {
  width: 90%;
}
</style>
