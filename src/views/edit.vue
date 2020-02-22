<template>
  <div class="home">
    <editTable />
  </div>
</template>

<script>
// @ is an alias to /src
import editTable from '@/components/editTable.vue'

export default {
  name: 'Home',
  components: {
    editTable
  }
}
</script>
