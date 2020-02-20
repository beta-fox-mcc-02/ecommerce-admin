<template>
    <div class="home bg-gradient-primary">
        <Navbar></Navbar>
        <RegisterForm />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    Navbar,
    RegisterForm,
  },
};
</script>
