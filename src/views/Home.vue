<template>
  <div class="jumbotron">
    <b-jumbotron header="G-watch CMS" lead="Welcome Admin">
      <b-button variant="primary" href="/dashboard">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
