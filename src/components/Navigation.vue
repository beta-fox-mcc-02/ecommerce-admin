<template>
  <div class="navigation">
    <ul class="nav">
      <li class="nav-item">
        <a @click.prevent="clickHome()" class="nav-link" href>Home</a>
      </li>
      <li v-if="!isLogin" class="nav-item">
        <a @click.prevent="clickLogin()" class="nav-link" href>Sign In</a>
      </li>
      <li v-if="isLogin" class="nav-item">
        <Logout></Logout>
      </li>
    </ul>
  </div>
</template>

<script>
import Logout from './Logout.vue';

export default {
  name: 'Navigation',
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  components: {
    Logout,
  },
  methods: {
    clickLogin() {
      this.$router.push('/login');
    },
    clickHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.navigation {
  padding: 10px 25px
}
.nav-item a:hover {
  background: rgba(0, 0, 0, 0.2)
}
.nav-item a:active {
  background: rgba(0, 0, 0, 0.2)
}
</style>
