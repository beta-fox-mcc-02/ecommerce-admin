<template>
  <div class="home">
    <HelloWorld/>
    <HomeContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeContent from '../components/home-content'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeContent
  }
}
</script>
