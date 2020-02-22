<template>
  <div class="sidebar">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="list-group list-group-flush flex">
        <router-link to="/products" class="list-group-item list-group-item-action bg-light">Product</router-link>
        <router-link to="/categories" class="list-group-item list-group-item-action bg-light">Category</router-link>
        <router-link to="/users" class="list-group-item list-group-item-action bg-light">User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .sidebar {
    width: 150px;
    text-align: center;
    min-height: 100%;
    border: 1px solid rgb(43, 42, 42);
  }
  .flex {
    display: flex;
    align-items: stretch;
  }
</style>
