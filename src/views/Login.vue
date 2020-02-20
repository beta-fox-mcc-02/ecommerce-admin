<template>
  <div class="home bg-gradient-primary">
    <Navbar></Navbar>
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    Navbar,
    LoginForm,
  },
};
</script>
