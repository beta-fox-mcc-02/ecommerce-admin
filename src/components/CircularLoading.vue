<template>
  <div class="text-center">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'CircularLoading'
}
</script>

<style lang="scss" scoped>
  .text-center {
    margin-top: 10px;
    width: 100%
  }
</style>
