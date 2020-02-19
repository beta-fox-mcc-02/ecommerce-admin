<template>
  <div class="form-vue">
    <FormLandingPage :titleForm="'Register'"></FormLandingPage>
    <router-link to="/login">Login Here!</router-link>
    <router-view />
  </div>
</template>

<script>
import FormLandingPage from "@/components/FormLandingPage.vue";

export default {
  name: "Register",
  components: {
    FormLandingPage
  }
};
</script>

<style>
</style>
