<template>
  <div id="nav">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    or
    <a v-on:click="logout" style="cursor: pointer">logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

div#nav {
  background-color: #2cb797;
  height: 3rem;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  color: white;
  margin: 0 1rem;
  font-size: 20pt;
  font-style: italic;
}

</style>>
