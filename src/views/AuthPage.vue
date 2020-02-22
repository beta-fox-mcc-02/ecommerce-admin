<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  },
  components: {
  }
}
</script>

<style>

</style>
