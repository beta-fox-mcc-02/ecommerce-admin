<template>
  <Auth :action="'Login'"></Auth>
</template>

<script>
import Auth from '../components/Auth'

export default {
  name: 'Login',
  components: {
    Auth
  }
}
</script>

<style>
</style>
