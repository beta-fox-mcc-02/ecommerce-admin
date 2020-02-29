<template>
  <a @click.prevent="logout()" class="nav-link" href>Sign Out</a>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style>

</style>
