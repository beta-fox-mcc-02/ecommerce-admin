<template>
  <div class="row">
    <div class="col s4 offset-s4">
      <div class="card z-depth-3">
        <div class="card-content center">
          <span class="card-title">Become an Admin!</span>
          <a class="btn-large blue accent-4 waves-effect" @click.prevent="registerTrigger">Register Now!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterButton',
  methods: {
    registerTrigger () {
      this.$store.commit('REGISTER_TRIGGER')
    }
  }
}
</script>

<style>

</style>
