<template>
<div id="home">
  <div class="home">
    <Navbar></Navbar>
    <i class="fab fa-soundcloud" style="font-size: 176px;color: #444444;"></i>
    <HelloWorld msg="Welcome!"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>

<style scoped>
#home {
  background-color: aliceblue !important;
}
</style>
