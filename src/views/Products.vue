<template>
  <div class="product-view">
    <h1 class="mb-3">Product</h1>
    <div class="flex">
      <h3>Product Menu : </h3>
      <router-link to="/products/list"><a class="btn-menu"><h3>LIST</h3></a></router-link> ||
      <router-link to="/products/add"><a class="btn-menu btn-add"><h3 class="btn-add">ADD</h3></a></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Products',
  created () {
    // this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  }
}
</script>

<style scoped>
  .product-view {
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
