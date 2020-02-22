<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'App',

  components: {
    navbar
  },

  data: () => ({
    //
  })
}
</script>
