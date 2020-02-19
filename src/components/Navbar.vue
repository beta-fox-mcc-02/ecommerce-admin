<template>
  <div>
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand>Admin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="show">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      show: this.$store.state.isAuth
    };
  }
};
</script>

<style>
</style>
