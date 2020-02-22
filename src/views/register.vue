<template>
  <div class="home">
    <register />
  </div>
</template>

<script>
// @ is an alias to /src
import register from '@/components/register.vue'

export default {
  name: 'home',
  components: {
    register
  }
}
</script>
