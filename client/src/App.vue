<template>
  <div id="app">
    <header>
      <h1 class="mb-0">G R S - S T O R E</h1>
    </header>
    <BaseNavbar/>
    <router-view class="view"/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseNavbar from './components/BaseNavbar'
import BaseFooter from './components/BaseFooter'
export default {
  name: 'App',
  components: {
    BaseNavbar,
    BaseFooter
  },
  created () {
    this.$store.dispatch('fetchData')
      .then(({ data }) => {
        this.$store.dispatch('setProducts', data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #000;
}

header {
  background: #212121;
}

.view {
  min-height: 100vh;
}
</style>
