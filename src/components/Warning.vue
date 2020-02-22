<template>
  <div class="container alert alert-danger alt-auth" role="alert" v-if="error">
    <i class="fa fa-warning"></i>
    {{error}}
  </div>
</template>

<script>
export default {
  name: 'Warning',
  computed: {
    error() {
      return this.$store.state.error
    }
  }
}
</script>

<style>
.alt-auth {
  width: 50%;
  margin: 20px auto 0px auto;
}
</style>
