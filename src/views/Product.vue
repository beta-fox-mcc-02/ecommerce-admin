<template>
  <div class="product">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <NavBar></NavBar>
    <center><h1>Product list</h1></center>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Product",
  components: {
    NavBar
  }
};
</script>

<style></style>
