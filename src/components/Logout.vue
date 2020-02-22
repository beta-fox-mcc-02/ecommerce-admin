<template>
  <a @click.prevent="tes()" class="nav-link" href>Sign Out</a>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    tes() {
      localStorage.clear();
      this.$router.push('/');
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style>

</style>
