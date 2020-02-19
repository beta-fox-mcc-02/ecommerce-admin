<template>
  <div>
    <FormLandingPage :titleForm="'Login'"></FormLandingPage>
    <router-link to="/">Register Here!</router-link>
    <router-view />
  </div>
</template>

<script>
import FormLandingPage from "@/components/FormLandingPage.vue";

export default {
  name: "Login",
  components: {
    FormLandingPage
  }
};
</script>

<style>
</style>
