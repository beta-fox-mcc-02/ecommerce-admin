<template>
  <div class="container mt-5">
    <div>
      <h1>Menu</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  }
}
</script>

<style>

</style>
