<template>
  <div id="app">
    <Navbar></Navbar>
    <b-container fluid="md" class="w-25 mt-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
Navbar {
  margin-top: 100px;
}
</style>

