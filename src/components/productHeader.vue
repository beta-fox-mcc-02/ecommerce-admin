<template>
  <div>
    <div><h4>Product Management</h4></div>
    <div style="display: flex; align-items: center; justify-content: flex-end">
      <form @submit.prevent="searchProduct">
        <div class="input-field col" style="margin: 0">
          <input id="searchQuery" v-model="searchQuery" type="text" class="validate">
          <label for="searchQuery">Search Product</label>
        </div>
      </form>
      <div class="col addButton">
        <i class="material-icons">add_circle</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchProduct () {
      this.$emit('filterProduct', this.searchQuery)
      this.searchQuery = ''
    }
  }
}
</script>

<style scoped>
.addButton i {
  font-size: 3rem;
  color: #2c3b41;
  transition: 1s;
}
.addButton i:hover {
  font-size: 3rem;
  color: blue;
  transform: rotate(360deg);
  transition: 1s;
}
</style>
