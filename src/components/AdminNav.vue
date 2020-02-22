<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Dashboard</a>
    <Logout />
  </nav>
</template>

<script>
import Logout from './Logout.vue';

export default {
  components: {
    Logout,
  },
};
</script>

<style scoped>
  .navbar-brand {
    font-weight: 700;
  }
</style>>
