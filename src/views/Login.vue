<template>
  <div>
    <Warning></Warning>
    <Auth :action="'Login'"></Auth>
  </div>
</template>

<script>
import Auth from '../components/Auth'
import Warning from '../components/Warning'

export default {
  name: 'Login',
  components: {
    Auth,
    Warning
  },
  created() {
    this.$store.commit('showError', '')
  }
}
</script>

<style>
</style>
