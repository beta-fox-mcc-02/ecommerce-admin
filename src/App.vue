<template>
<div id="app">
    <Nav id="nav"></Nav>
    <!-- <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div> -->
            <router-view></router-view>
          <!-- </div>
        </div>
      </div>
    </div> -->
</div>
</template>

<script>
import Nav from './components/Navbar'

export default {
  name: 'app',
  components: {
    Nav
  },
  created () {
    if (localStorage.token) {
      this.$store.commit('HAVETOKEN', true)
    }
  }
}
</script>
