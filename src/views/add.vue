<template>
  <div class="home">
    <addTable />
  </div>
</template>

<script>
// @ is an alias to /src
import addTable from '@/components/addTable.vue'

export default {
  name: 'Home',
  components: {
    addTable
  }
}
</script>
