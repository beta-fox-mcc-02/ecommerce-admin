<template>
  <div class="home">
    <tabledata />
  </div>
</template>

<script>
// @ is an alias to /src
import tabledata from '@/components/table.vue'

export default {
  name: 'Home',
  components: {
    tabledata
  }
}
</script>
