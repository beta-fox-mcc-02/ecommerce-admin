<template>
  <div class="columns">
    <div class="column is-3">
      <SideMenu />
    </div>
    <div class="container column is-9">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu'

export default {
  name: 'Dashboard',
  components: {
    SideMenu
  }
}
</script>

<style></style>
