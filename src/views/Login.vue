<template>
  <div class="login">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <AdminLogin />
  </div>
</template>

<script>
import AdminLogin from "../components/AdminLogin.vue";

export default {
  name: "Login",
  components: {
    AdminLogin
  }
};
</script>

<style></style>
