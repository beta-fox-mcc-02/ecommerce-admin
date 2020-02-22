<template>
  <div class="text-left container my-3 py-3 shadow p-3 mb-5 rounded box-view">
    <div class="head">
      <h4>Ladies Watches</h4>
    </div>
    <div class="row mt-2 justify-content-around">
      <Card v-for="watch in showProducts" :key="watch.id" :watch="watch"/>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'LadiesWatch',
  components: {
    Card
  },
  computed: {
    showProducts () {
      return this.$store.state.ladiesBox
    }
  }
}

</script>

<style>

</style>
