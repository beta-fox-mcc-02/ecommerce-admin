<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to CE8 Admin"/>
    <RegisterButton/>
    <RegisterForm v-if="showRegister" @close="registerTrigger"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import RegisterButton from '../components/RegisterButton.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  name: 'Home',
  components: {
    Login,
    RegisterButton,
    RegisterForm
  },
  methods: {
    registerTrigger () {
      this.$store.commit('REGISTER_TRIGGER')
    }
  },
  computed: {
    showRegister () {
      return this.$store.state.showRegister
    }
  }
}
</script>

<style scoped>
  img {
    width: 10rem;
    height: auto;
    margin-top: 3rem
  }
</style>
