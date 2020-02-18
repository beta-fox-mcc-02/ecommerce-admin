<template>
  <div class="columns">
    <div class="column is-3">
      <SideMenu />
    </div>
    <div class="container column is-9">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">Header</p>
        </div>
        <div class="card-content"><div class="content">Content</div></div>
      </div>
      <br />
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
