<template>
  <div class="category-view">
    <h1 class="mb-3">Category</h1>
    <div class="flex">
      <h3>Category Menu : </h3>
      <router-link to="/categories/list"><a class="btn-menu"><h3>LIST</h3></a></router-link> ||
      <router-link to="/categories/add"><a class="btn-menu btn-add"><h3 class="btn-add">ADD</h3></a></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'categoryDashboard',
  created () {
    // this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  }
}
</script>

<style scoped>
  .category-view {
    padding: 10px 0px
  }
  .flex {
    display: flex;
    flex-direction: row;
    /* justify-content: center */
    align-items: center;
  }
  .btn-menu {
    margin: 0px 5px
  }
  h3 {
    margin-right: 10px
  }
  .btn-add {
    margin-left: 10px
  }
</style>
