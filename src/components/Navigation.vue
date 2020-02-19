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
        <a @click.prevent="clickLogout()" class="nav-link" href>Sign Out</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    clickLogin() {
      this.$router.push('/login');
    },
    clickHome() {
      this.$router.push('/');
    },
    clickLogout() {
      localStorage.clear();
      this.$router.push('/');
      this.$store.dispatch('logout');
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
