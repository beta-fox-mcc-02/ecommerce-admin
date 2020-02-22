<template>
  <div>
    <b-jumbotron header="G-watch CMS" lead="Welcome Admin" class="jmbt">
      <b-button class="btn-dash" to="/dashboard">
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

<style>
.btn-dash {
  background-color: #7f7f7f;
}

.jmbt {
  position: fixed;
  height: 700px;
  width: 100vw;
}
</style>
