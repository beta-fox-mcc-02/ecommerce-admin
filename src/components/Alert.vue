<template>
  <div>
    <div class="alert" :class="showStatus">
      {{ showAlert }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    showAlert () {
      return this.$store.state.message
    },
    showStatus () {
      // if (this.$store.state.alertStatus) {
      //   return 'alert-success'
      // } else if (this.$store.state.alertStatus === false) {
      //   return 'alert-danger'
      // } else {
      //   return null
      // }
      return this.$store.getters.getAlert
    }
  }
}
</script>

<style>

</style>
